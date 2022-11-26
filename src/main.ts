import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger();
  await app.listen(3000);

  app.use(express.static(__dirname + 'imagenes'))

  //messageS
  logger.log(`Server runnign on port ${ await app.getUrl() }`)

}
bootstrap();
