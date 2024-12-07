import { FilterTaskRequest } from 'src/domain/models/tasks/filter-task';
import { TaskModel } from 'src/domain/models/tasks/task';

export interface FilterTasksUseCase {
  filter: (data: FilterTaskRequest) => Promise<TaskModel[]>;
}
