import { TaskCompletedRequest } from 'src/domain/models/tasks/task-completed';

export interface TaskCompletedUseCase {
  completed: (data: TaskCompletedRequest) => Promise<void>;
}
