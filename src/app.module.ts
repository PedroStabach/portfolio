// src/app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),  // Diretório correto de arquivos estáticos
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
