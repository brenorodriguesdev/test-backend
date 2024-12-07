import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteTaskRequest {
  @ApiProperty()
  @IsNumber()
  taskId: number;
}