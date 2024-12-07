import { TaskStatusModel } from 'src/domain/models/tasks/task-status';

export interface ITaskStatusRepository {
  list: () => Promise<TaskStatusModel[]>;
}
