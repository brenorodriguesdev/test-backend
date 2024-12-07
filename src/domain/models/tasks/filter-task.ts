import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FilterTaskRequest {
  @IsOptional()
  userId?: number;
  @ApiProperty()
  statusId?: number;
}
