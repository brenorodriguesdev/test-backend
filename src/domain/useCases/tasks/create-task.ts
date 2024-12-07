import { HttpException } from '@nestjs/common';
import { CreateTaskRequest } from 'src/domain/models/tasks/create-task';
import { TaskModel } from 'src/domain/models/tasks/task';

export interface CreateTaskUseCase {
  create: (data: CreateTaskRequest) => Promise<TaskModel | HttpException>;
}
