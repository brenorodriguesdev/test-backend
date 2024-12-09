import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskRequest {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty()
  @IsOptional()
  @IsDateString()
  start_date?: Date;
  @ApiProperty()
  @IsOptional()
  @IsDateString()
  end_date?: Date;
  @IsOptional()
  userId: number;
  @ApiProperty()
  @IsNumber()
  statusId: number;
}
