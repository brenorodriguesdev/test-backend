import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class FilterTaskRequest {
  @IsOptional()
  userId?: number;
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  statusId?: number;
}
