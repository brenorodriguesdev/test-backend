export interface MailParams {
  to: string;
  title: string;
  body: string;
}

export interface SendMail {
  send: (data: MailParams) => Promise<void>;
}
