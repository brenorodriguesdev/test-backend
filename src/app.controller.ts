import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'path';

@Controller('')
export class AppController {
  @Get('/swagger')
  @ApiExcludeEndpoint()
  swagger(@Res() res: Response) {
    const filePath = join(__dirname, '..', 'swagger.json');
    res.sendFile(filePath);
  }
}
