import { User } from '@/entities/user';
import { LoadUserByNameRepository } from '@/user/repositories/load-user-by-name/load-user-by-name.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadUserByNameService {
  constructor(private readonly loadUserByNameRepo: LoadUserByNameRepository) {}

  async loadUserByName(name: string): Promise<User> {
    const userName = await this.loadUserByNameRepo.loadUserByName(name);

    if (!userName) {
      throw new NotFoundException('No record found.');
    }

    delete userName.password;

    return userName;
  }
}
