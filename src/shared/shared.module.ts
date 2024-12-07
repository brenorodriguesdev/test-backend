import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { CryptographyService } from './cryptography.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ConfigService, JwtService, MailService, CryptographyService],
  exports: [CryptographyService, MailService],
})
export class SharedModule {}
