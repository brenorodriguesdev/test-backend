import { FilterTaskRequest } from 'src/domain/models/tasks/filter-task';
import { TaskModel } from 'src/domain/models/tasks/task';

export interface ITaskRepository {
  getById: (id: number) => Promise<TaskModel>;
  filter: (data: FilterTaskRequest) => Promise<TaskModel[]>;
  create: (task: TaskModel) => Promise<TaskModel>;
  update: (task: TaskModel) => Promise<void>;
  deleteById: (taskId: number) => Promise<void>;
}
