import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateTaskUseCase } from 'src/domain/useCases/tasks/create-task';
import { UpdateTaskUseCase } from 'src/domain/useCases/tasks/update-task';
import { DeleteTaskUseCase } from 'src/domain/useCases/tasks/delete-task';
import { TaskRepository } from 'src/infra/repositories/task.repository';
import { CreateTaskRequest } from 'src/domain/models/tasks/create-task';
import { TaskModel } from 'src/domain/models/tasks/task';
import { UpdateTaskRequest } from 'src/domain/models/tasks/update-task';
import { UserRepository } from 'src/infra/repositories/user.repository';
import { FilterTaskRequest } from 'src/domain/models/tasks/filter-task';
import { FilterTasksUseCase } from 'src/domain/useCases/tasks/filter-tasks';
import { ListTaskStatusesUseCase } from 'src/domain/useCases/tasks/list-task-statuses';
import { TaskStatusRepository } from 'src/infra/repositories/task-status.repository';
import { TaskStatusModel } from 'src/domain/models/tasks/task-status';
import { TasksProcessor } from './tasks.processor';
import { StastusTypes } from './tasks-status.constants';

@Injectable()
export class TasksService
  implements
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    FilterTasksUseCase,
    ListTaskStatusesUseCase
{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskStatusRepository: TaskStatusRepository,
    private readonly userRepository: UserRepository,
    private readonly tasksProcessor: TasksProcessor,
  ) {}

  async create({
    name,
    description,
    start_date,
    end_date,
    userId,
    statusId,
  }: CreateTaskRequest): Promise<TaskModel | HttpException> {
    const user = await this.userRepository.getById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const status = await this.taskStatusRepository.getStatusById(statusId);
    if (!status) {
      throw new BadRequestException('Status not found');
    }

    const taskCreated = await this.taskRepository.create({
      name,
      description,
      start_date,
      end_date,
      user,
      status,
    });

    if (statusId === StastusTypes.Done) {
      await this.tasksProcessor.completed({
        taskId: taskCreated.id,
        email: user.email,
      });
    }

    return taskCreated;
  }

  async delete(taskId: number): Promise<void | HttpException> {
    return await this.taskRepository.deleteById(taskId);
  }

  async update({
    id,
    name,
    description,
    start_date,
    end_date,
    statusId,
  }: UpdateTaskRequest): Promise<void | HttpException> {
    const task = await this.taskRepository.getById(id);
    if (!task) {
      throw new BadRequestException('Task not found');
    }

    const status = await this.taskStatusRepository.getStatusById(statusId);
    if (!status) {
      throw new BadRequestException('Status not found');
    }

    if (statusId === StastusTypes.Done && task.status.id !== statusId) {
      await this.tasksProcessor.completed({
        taskId: task.id,
        email: task.user.email,
      });
    }

    task.description = description;
    task.name = name;
    task.start_date = start_date;
    task.end_date = end_date;
    task.status = status;

    await this.taskRepository.update(task);
  }

  async filter(data: FilterTaskRequest): Promise<TaskModel[]> {
    const tasks = await this.taskRepository.filter(data);
    return tasks;
  }

  async listStatuses(): Promise<TaskStatusModel[]> {
    const statuses = await this.taskStatusRepository.list();
    return statuses;
  }
}
