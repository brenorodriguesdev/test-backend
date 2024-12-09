import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class FilterTaskRequest {
  @IsOptional()
  userId?: number;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  statusId?: number;
}
