import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SignUpRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  @IsEmail()
  email: string;
}
