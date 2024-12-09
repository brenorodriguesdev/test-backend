import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskStatus } from '../entities/task-status';
import { ITaskStatusRepository } from 'src/application/contracts/task-status-repository';

@Injectable()
export class TaskStatusRepository implements ITaskStatusRepository {
  constructor(
    @InjectRepository(TaskStatus)
    private taskStatusRepository: Repository<TaskStatus>,
  ) {}

  async list(): Promise<TaskStatus[]> {
    return await this.taskStatusRepository.find({});
  }

  async getStatusById(id: number): Promise<TaskStatus> {
    return await this.taskStatusRepository.findOne({ where: { id } });
  }
}
