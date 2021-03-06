import { configService } from '@/config/config.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      ttl: Number(process.env.THROTTLER_TTL),
      limit: Number(process.env.THROTTLER_LIMIT),
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
