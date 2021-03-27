import { UpdateCategoryDto } from '@/category/dtos/update-category/update-category.dto';
import { Category } from '@/entities/category';
import { ReturnMessageType } from '@/shared/@types/return-message/return-message.type';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Category)
export class UpdateCategoryRepository extends Repository<Category> {
  async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<ReturnMessageType> {
    await this.update(id, { ...updateCategoryDto });
    return {
      message: 'Category updated with successsfully.',
    };
  }
}
