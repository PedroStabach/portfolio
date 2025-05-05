// src/app.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  getIndex(@Res() res: Response) {
    const filePath = join(__dirname, '..', 'index.html'); // <-- caminho correto
    return res.sendFile(filePath);
  }
}
