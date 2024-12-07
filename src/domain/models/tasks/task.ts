import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from '../users/user';

export class TaskModel {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  start_date: Date;
  @ApiProperty()
  end_date: Date;
  @ApiProperty()
  user: UserModel;
}
