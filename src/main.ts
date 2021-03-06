import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from '@/common/interceptors/logging.interceptor';
import { TransformInterceptor } from '@/common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Main');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT, () => logger.log(`Server running...`));
}
bootstrap();
