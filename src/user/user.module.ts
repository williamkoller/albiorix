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
import { LoadAllUsersRepository } from '@/user/repositories/load-all-users/load-all-users.repository';
import { LoadAllUsersController } from '@/user/controllers/load-all-users/load-all-users.controller';
import { LoadAllUsersService } from '@/user/services/load-all-users/load-all-users.service';
import { LoadUserByEmailController } from '@/user/controllers/load-user-by-email/load-user-by-email.controller';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';
import { LoadUserByNameRepository } from '@/user/repositories/load-user-by-name/load-user-by-name.repository';
import { LoadUserByNameService } from '@/user/services/load-user-by-name/load-user-by-name.service';
import { LoadUserByNameController } from '@/user/controllers/load-user-by-name/load-user-by-name.controller';
import { DeleteUserRepository } from '@/user/repositories/delete-user/delete-user.repository';
import { DeleteUserController } from '@/user/controllers/delete-user/delete-user.controller';
import { DeleteUserService } from '@/user/services/delete-user/delete-user.service';
import { LoadUserByIdController } from '@/user/controllers/load-user-by-id/load-user-by-id.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      LoadUserByEmailRepository,
      LoadAllUsersRepository,
      LoadUserByIdRepository,
      LoadUserByNameRepository,
      DeleteUserRepository,
    ]),
  ],
  providers: [
    AddUserRepository,
    AddUserService,
    LoadUserByEmailService,
    LoadAllUsersService,
    Hasher,
    HashComparer,
    LoadUserByIdService,
    LoadUserByNameService,
    DeleteUserService,
  ],
  controllers: [
    AddUserController,
    LoadAllUsersController,
    LoadUserByEmailController,
    LoadUserByNameController,
    DeleteUserController,
    LoadUserByIdController,
  ],
})
export class UserModule {}
