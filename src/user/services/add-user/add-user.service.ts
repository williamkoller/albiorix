import { User } from '@/entities/user';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserRepository } from '@/user/repositories/add-user/add-user.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import { LoadUserByEmailService } from '../load-user-by-email/load-user-by-email.service';

@Injectable()
export class AddUserService {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly loadUserByEmailService: LoadUserByEmailService,
  ) {}

  async addUser(addUserDto: AddUserDto): Promise<User> {
    const user = await this.loadUserByEmailService.loadUserByEmail(
      addUserDto.email,
    );

    if (user) {
      throw new ConflictException('A user already exists with this email.');
    }

    return await this.addUserRepository.add(addUserDto);
  }
}
