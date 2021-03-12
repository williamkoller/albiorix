import { User } from '@/entities/user';
import { ReturnMessageType } from '@/shared/@types/return-message/return-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class DeleteUserRepository extends Repository<User> {
  async deleteUser(id: string): Promise<ReturnMessageType> {
    await this.delete(id);
    return {
      message: 'This a user deleted with successfully.',
    };
  }
}
