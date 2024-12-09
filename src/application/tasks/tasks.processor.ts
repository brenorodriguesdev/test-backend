import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bullmq';
import { TaskCompletedRequest } from 'src/domain/models/tasks/task-completed';
import { TaskCompletedUseCase } from 'src/domain/useCases/tasks/task-completed';

@Injectable()
@Processor('task-completed')
export class TasksProcessor extends WorkerHost implements TaskCompletedUseCase {
  constructor(
    @InjectQueue('task-completed') private readonly taskCompletedQueue: Queue,
  ) {
    super();
  }

  async completed({ taskId, email }: TaskCompletedRequest): Promise<void> {
    await this.taskCompletedQueue.add('task-completed-job', {
      taskId,
      email,
    });
  }
  async process(job: Job) {
    const { taskId, email } = job.data;
    console.log(`✅ Tarefa ${taskId} concluída! Enviado email para ${email}.`);
  }
}
