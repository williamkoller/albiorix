import { User } from '@/entities/user';
import { LoadUserByEmailRepository } from '@/user/repositories/load-user-by-email/load-user-by-email.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadUserByEmailService {
  constructor(
    private readonly loadUSerByEmailRepository: LoadUserByEmailRepository,
  ) {}

  async loadUserByEmail(email: string): Promise<User> {
    return await this.loadUSerByEmailRepository.loadByEmail(email);
  }
}
