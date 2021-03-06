import { User } from '@/entities/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { Hasher } from '@/shared/criptography/hasher';
import { HashComparer } from '@/shared/criptography/hash-comparer';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { AddUserService } from '@/user/services/add-user/add-user.service';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { AddUserController } from '@/user/controllers/add-user/add-user.contrroller';

@Module({
  imports: [TypeOrmModule.forFeature([User, LoadUserByEmailRepository])],
  providers: [
    AddUserRepository,
    AddUserService,
    LoadUserByEmailService,
    Hasher,
    HashComparer,
  ],
  controllers: [AddUserController],
})
export class UserModule {}
