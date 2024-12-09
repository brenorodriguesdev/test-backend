import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task';
import { ITaskRepository } from 'src/application/contracts/task-repository';
import { TaskModel } from 'src/domain/models/tasks/task';
import { FilterTaskRequest } from 'src/domain/models/tasks/filter-task';

@Injectable()
export class TaskRepository implements ITaskRepository {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getById(id: number): Promise<TaskModel> {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ['user', 'status'],
    });
    return task;
  }

  async filter({ userId, statusId }: FilterTaskRequest): Promise<TaskModel[]> {
    const where = {
      user: { id: userId },
      status: { id: statusId },
    };

    if (!userId) {
      delete where.user;
    }

    if (!statusId) {
      delete where.status;
    }

    const tasks = await this.taskRepository.find({
      where,
      relations: ['status'],
    });

    return tasks;
  }

  async create(data: TaskModel): Promise<TaskModel> {
    return await this.taskRepository.save(data);
  }

  async update(data: TaskModel): Promise<void> {
    await this.taskRepository.save(data);
  }

  async deleteById(taskId: number): Promise<void> {
    await this.taskRepository.delete(taskId);
  }
}
