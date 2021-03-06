import { User } from '@/entities/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { Hasher } from '@/shared/criptography/hasher';
import { HashComparer } from '@/shared/criptography/hash-comparer';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AddUserRepository, Hasher, HashComparer],
})
export class UserModule {}
