import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { InfraModule } from 'src/infra/infra.module';
import { SharedModule } from 'src/shared/shared.module';
import { TasksService } from './tasks.service';
import { BullModule } from '@nestjs/bullmq';
import { TasksProcessor } from './tasks.processor';

@Module({
  imports: [
    SharedModule,
    InfraModule,
    BullModule.registerQueue({
      name: 'task-completed',
    }),
  ],
  providers: [TasksProcessor, TasksService],
  controllers: [TasksController],
  exports: [TasksService, TasksProcessor],
})
export class TasksModule {}
