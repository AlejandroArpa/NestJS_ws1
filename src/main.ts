import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function entryPoint() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
entryPoint();
