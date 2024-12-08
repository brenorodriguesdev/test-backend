import { SignInRequest, SignInResponse } from 'src/domain/models/users/sign-in';
import { SignUpRequest } from 'src/domain/models/users/sign-up';
import { SignInUseCase } from 'src/domain/useCases/users/sign-in';
import { SignUpUseCase } from 'src/domain/useCases/users/sign-up';
import { UserRepository } from 'src/infra/repositories/user.repository';
import { CryptographyService } from 'src/shared/cryptography.service';
import { MailService } from 'src/shared/mail.service';
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService implements SignInUseCase, SignUpUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptographyService: CryptographyService,
    private readonly mailService: MailService,
  ) {}

  async signIn({
    email,
    password,
  }: SignInRequest): Promise<SignInResponse | HttpException> {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new BadRequestException('E-mail or password is invalid!');
    }
    const isValid = await this.cryptographyService.compare(
      password,
      user.password,
    );

    if (!isValid) {
      throw new BadRequestException('E-mail or password is invalid!');
    }

    delete user.password;
    const payload = { sub: user.id, user };

    const accessToken = await this.cryptographyService.encrypt(payload);
    return {
      accessToken,
      ...user,
    };
  }

  async signUp({ email, name }: SignUpRequest): Promise<void | HttpException> {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new BadRequestException('E-mail already exist!');
    }

    const generatedPassword = this.cryptographyService.generatePassword();

    const passwordHash = await this.cryptographyService.hash(generatedPassword);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    await this.mailService.send({
      to: email,
      title: 'Primeiro Acesso',
      body: generatedPassword,
    });
  }
}
