import { HttpException } from '@nestjs/common';
import { SignInRequest, SignInResponse } from 'src/domain/models/users/sign-in';

export interface SignInUseCase {
  signIn: (data: SignInRequest) => Promise<SignInResponse | HttpException>;
}
