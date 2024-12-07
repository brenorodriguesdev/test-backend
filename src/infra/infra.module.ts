import { Module } from '@nestjs/common';
import { User } from './entities/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { Task } from './entities/task';
import { TaskStatus } from './entities/task-status';
import { TaskRepository } from './repositories/task.repository';
import { TaskStatusRepository } from './repositories/task-status.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Task, TaskStatus])],
  providers: [UserRepository, TaskRepository, TaskStatusRepository],
  exports: [
    UserRepository,
    TaskRepository,
    TaskStatusRepository,
    TypeOrmModule,
  ],
})
export class InfraModule {}
