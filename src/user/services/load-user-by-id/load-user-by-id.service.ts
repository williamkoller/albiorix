import { User } from '@/entities/user';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadUserByIdService {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async loadUserById(id: string): Promise<User> {
    const userId = await this.loadUserByIdRepository.loadUserById(id);
    if (!userId) {
      throw new NotFoundException('USer not found.');
    }

    return userId;
  }
}
