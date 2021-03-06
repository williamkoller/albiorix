import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Main');

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.PORT, () => logger.log(`Server running...`));
}
bootstrap();
