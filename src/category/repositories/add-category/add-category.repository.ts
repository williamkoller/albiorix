import { AddCategoryDto } from '@/category/dtos/add-category/add-category.dto';
import { Category } from '@/entities/category';
import { validateOrReject } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class AddCategoryRepository extends Repository<Category> {
  async addCategory(addCategoryDto: AddCategoryDto): Promise<Category> {
    const category = Object.assign({} as Category, addCategoryDto);
    validateOrReject(category);
    return await this.save(category);
  }
}
