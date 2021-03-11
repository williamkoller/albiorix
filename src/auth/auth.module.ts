import { User } from '@/entities/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtTokenService } from '@/auth/services/jwt-token/jwt-token.service';
import { AuthLoginController } from '@/auth/controllers/login/auth-login.controller';
import { ValidateUserService } from '@/auth/services/validate-user/validate-user.service';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { HashComparer } from '@/shared/criptography/hash-comparer';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([User, LoadUserByEmailRepository]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      }),
    }),
  ],
  providers: [
    JwtTokenService,
    ValidateUserService,
    LoadUserByEmailService,
    HashComparer,
  ],
  controllers: [AuthLoginController],
})
export class AuthModule {}
