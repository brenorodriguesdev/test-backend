import { HttpException } from '@nestjs/common';

export interface DeleteTaskUseCase {
  delete: (taskId: number) => Promise<void | HttpException>;
}
