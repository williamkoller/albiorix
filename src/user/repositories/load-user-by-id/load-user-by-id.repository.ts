import { User } from '@/entities/user';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadUserByIdRepository extends Repository<User> {
  async loadUserById(id: string): Promise<User> {
    return await this.createQueryBuilder('users')
      .select()
      .where('id = :id', { id })
      .getOne();
  }
}
