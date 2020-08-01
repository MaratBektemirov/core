import { NestFactory } from '@nestjs/core';
import { AppModule } from '@api/app.module';
import { API_PORT } from '@api/constants/common';
import 'reflect-metadata';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(API_PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
