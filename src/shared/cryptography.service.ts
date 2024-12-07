import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Decrypter } from 'src/application/contracts/decrypter';
import { Encrypter } from 'src/application/contracts/encrypter';
import { HashComparer } from 'src/application/contracts/hash-compare';
import { Hasher } from 'src/application/contracts/hasher';
import { GeneratePassword } from 'src/application/contracts/generate-password';
import * as bcrypt from 'bcrypt';
import * as generatePassword from 'generate-password';

@Injectable()
export class CryptographyService
  implements Decrypter, Encrypter, HashComparer, Hasher, GeneratePassword
{
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async decrypt(ciphertext: string): Promise<any> {
    const payload = await this.jwtService.verifyAsync(ciphertext, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });
    return payload;
  }

  async encrypt(payload: any): Promise<string> {
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
    });
    return accessToken;
  }

  async hash(plaintext: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(plaintext, saltOrRounds);
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return await bcrypt.compare(plaintext, digest);
  }
  generate(): string {
    return generatePassword.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
      strict: true,
    });
  }
}
