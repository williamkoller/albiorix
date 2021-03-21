import { AddCategoryDto } from '@/category/dtos/add-category/add-category.dto';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { Category } from '@/entities/category';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class AddCategoryService {
  constructor(
    private readonly addCategoryRepository: AddCategoryRepository,
    private readonly loadCategoryByNameRepository: LoadCategoryByNameRepository,
  ) {}

  async add(addCategoryDto: AddCategoryDto): Promise<Category> {
    const { name } = addCategoryDto;
    const categoryExists = await this.loadCategoryByNameRepository.loadName(
      name,
    );

    if (categoryExists) {
      throw new ConflictException(`This ${name} in category already exists.`);
    }

    return await this.addCategoryRepository.addCategory(addCategoryDto);
  }
}
