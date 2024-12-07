import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { InfraModule } from 'src/infra/infra.module';
import { SharedModule } from 'src/shared/shared.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [SharedModule, InfraModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
