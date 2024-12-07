import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailParams, SendMail } from 'src/application/contracts/send-mail';

@Injectable()
export class MailService implements SendMail {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async send({ to, title, body }: MailParams): Promise<void> {
    await this.mailerService.sendMail({
      to,
      from: this.configService.get<string>('MAIL_FROM'),
      subject: title,
      html: body,
    });
  }
}
