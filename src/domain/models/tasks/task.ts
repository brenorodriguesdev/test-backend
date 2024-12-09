import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from '../users/user';
import { TaskStatusModel } from './task-status';

export class TaskModel {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  start_date?: Date;
  @ApiProperty()
  end_date?: Date;
  @ApiProperty()
  user: UserModel;
  @ApiProperty()
  status: TaskStatusModel;
}
