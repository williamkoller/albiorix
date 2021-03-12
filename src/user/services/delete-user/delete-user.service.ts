import { ReturnMessageType } from '@/shared/@types/return-message/return-message.type';
import { DeleteUserRepository } from '@/user/repositories/delete-user/delete-user.repository';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository,
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async deleteUser(id: string): Promise<ReturnMessageType> {
    const user = await this.loadUserByIdRepository.loadUserById(id);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return await this.deleteUserRepository.deleteUser(id);
  }
}
