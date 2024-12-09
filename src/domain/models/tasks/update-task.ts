import { ApiProperty } from '@nestjs/swagger';
import { CreateTaskRequest } from './create-task';
import { IsNumber } from 'class-validator';

export class UpdateTaskRequest extends CreateTaskRequest {
  @ApiProperty()
  @IsNumber()
  id?: number;
}
