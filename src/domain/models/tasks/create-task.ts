import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateTaskRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  @IsOptional()
  start_date?: Date;
  @ApiProperty()
  @IsOptional()
  end_date?: Date;
  @IsOptional()
  userId: number;
}
