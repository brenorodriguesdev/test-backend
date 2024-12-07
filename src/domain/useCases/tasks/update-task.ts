import { HttpException } from '@nestjs/common';
import { UpdateTaskRequest } from 'src/domain/models/tasks/update-task';

export interface UpdateTaskUseCase {
  update: (data: UpdateTaskRequest) => Promise<void | HttpException>;
}
