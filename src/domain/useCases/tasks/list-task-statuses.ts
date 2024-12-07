import { TaskStatusModel } from 'src/domain/models/tasks/task-status';

export interface ListTaskStatusesUseCase {
  listStatuses: () => Promise<TaskStatusModel[]>;
}
