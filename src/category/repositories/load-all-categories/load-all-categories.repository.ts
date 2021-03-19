import { Category } from '@/entities/category';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class LoadAllCategoriesRepository extends Repository<Category> {
  async loadAll(): Promise<Category[]> {
    return await this.find();
  }
}
