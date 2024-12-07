import { HttpException } from '@nestjs/common';
import { SignUpRequest } from 'src/domain/models/users/sign-up';

export interface SignUpUseCase {
  signUp: (data: SignUpRequest) => Promise<void | HttpException>;
}
