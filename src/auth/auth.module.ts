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
import { AuthMeController } from '@/auth/controllers/me/auth-me.controller';
import { LoadUserProfileService } from '@/user/services/load-user-profile/load-user-profile.service';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { JwtStrategy } from '@/auth/strategies/jwt/jwt.strategy';
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      User,
      LoadUserByEmailRepository,
      LoadUserByIdRepository,
    ]),
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
    JwtStrategy,
    ValidateUserService,
    LoadUserByEmailService,
    HashComparer,
    LoadUserProfileService,
    LoadUserByIdService,
  ],
  controllers: [AuthLoginController, AuthMeController],
})
export class AuthModule {}
