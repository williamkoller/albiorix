import { User } from '@/entities/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { Hasher } from '@/shared/criptography/hasher';
import { HashComparer } from '@/shared/criptography/hash-comparer';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, LoadUserByEmailRepository])],
  providers: [AddUserRepository, Hasher, HashComparer],
})
export class UserModule {}
