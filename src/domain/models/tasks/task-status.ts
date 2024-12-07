import { ApiProperty } from '@nestjs/swagger';

export class TaskStatusModel {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
