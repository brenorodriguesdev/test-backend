import { Module } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { CryptographyService } from './cryptography/cryptography.service';

@Module({
  providers: [MailService, CryptographyService],
})
export class SharedModule {}
