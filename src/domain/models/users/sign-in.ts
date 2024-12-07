import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SignInRequest {
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  password: string;
}

export class SignInResponse {
  @ApiProperty()
  accessToken: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
}
