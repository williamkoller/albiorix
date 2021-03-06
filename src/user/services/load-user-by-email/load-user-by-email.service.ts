import { User } from '@/entities/user';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadUserByEmailService {
  constructor(
    private readonly loadUSerByEmailRepository: LoadUserByEmailRepository,
  ) {}

  async loadUserByEmail(email: string): Promise<User> {
    const userByEmail = await this.loadUSerByEmailRepository.loadByEmail(email);

    if (!userByEmail) {
      throw new NotFoundException('User not found.');
    }

    return userByEmail;
  }
}
