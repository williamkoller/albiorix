import { User } from '@/entities/user';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadAllUsersRepository extends Repository<User> {
  async loadAll(): Promise<User[]> {
    return await this.createQueryBuilder('users')
      .orderBy('users.createdAt', 'ASC')
      .getMany();
  }
}
