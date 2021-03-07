import { User } from '@/entities/user';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class AddUserService {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
  ) {}

  async addUser(addUserDto: AddUserDto): Promise<User> {
    const user = await this.loadUserByEmailRepository.loadByEmail(
      addUserDto.email,
    );

    if (user) {
      throw new ConflictException('A user already exists with this email.');
    }

    return await this.addUserRepository.add(addUserDto);
  }
}
