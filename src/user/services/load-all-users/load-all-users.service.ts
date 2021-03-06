import { User } from '@/entities/user';
import { LoadAllUsersRepository } from '@/user/repositories/load-all-users/load-all-users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadAllUsersService {
  constructor(private readonly loadAllUsersRepo: LoadAllUsersRepository) {}

  async loadAll(): Promise<User[]> {
    const users = await this.loadAllUsersRepo.loadAll();

    if (users?.length === 0) {
      throw new NotFoundException('No record found.');
    }

    return users;
  }
}
