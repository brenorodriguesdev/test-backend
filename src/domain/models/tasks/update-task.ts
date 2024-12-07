import { CreateTaskRequest } from './create-task';

export interface UpdateTaskRequest extends CreateTaskRequest {
  id?: number;
  name: string;
  start_date?: Date;
  end_date?: Date;
}
