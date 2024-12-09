import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteTaskRequest {
  @ApiProperty()
  @IsString()
  taskId: number;
}
