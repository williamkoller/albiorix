import { Category } from '@/entities/category';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class LoadCategoryByNameRepository extends Repository<Category> {
  async loadName(name: string): Promise<Category> {
    return this.createQueryBuilder('categories')
      .where(`categories.name ILIKE :name`, { name })
      .getOne();
  }
}
