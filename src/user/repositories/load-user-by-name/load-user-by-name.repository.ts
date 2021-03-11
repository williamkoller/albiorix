import { User } from '@/entities/user';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadUserByNameRepository extends Repository<User> {
  async loadUserByName(name: string): Promise<User> {
    return await this.createQueryBuilder('users')
      .where(`(users.name ilike (:name))`, { name: `%${name}%` })
      .getOne();
  }
}
