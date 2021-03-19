import { AuthModule } from '@/auth/auth.module';
import { CategoryModule } from '@/category/category.module';
import { configService } from '@/config/config.service';
import { UserModule } from '@/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
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
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    forwardRef(() => CategoryModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
