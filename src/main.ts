import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  TimeoutInterceptor,
  LoggingInterceptor,
  TransformInterceptor,
} from '@/common/interceptors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('Main');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
    new TimeoutInterceptor(),
  );

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Albiorix example')
    .setDescription('The albiorix API description')
    .setVersion('1.0')
    .addTag('user')
    .addTag('category')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT, () => logger.log(`Server running...`));
}
bootstrap();
