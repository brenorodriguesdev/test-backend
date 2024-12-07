import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignInRequest, SignInResponse } from 'src/domain/models/users/sign-in';
import { SignUpRequest } from 'src/domain/models/users/sign-up';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/sign-in')
  @ApiResponse({
    status: HttpStatus.OK,
    type: SignInResponse,
  })
  signIn(@Body() data: SignInRequest) {
    return this.usersService.signIn(data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/sign-up')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  signUp(@Body() data: SignUpRequest) {
    return this.usersService.signUp(data);
  }
}
