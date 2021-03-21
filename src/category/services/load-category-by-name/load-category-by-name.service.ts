import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { Category } from '@/entities/category';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadCategoryByNameService {
  constructor(
    private readonly loadCategoryByNameRepository: LoadCategoryByNameRepository,
  ) {}

  async loadName(name: string): Promise<Category[]> {
    const categoryName = await this.loadCategoryByNameRepository.loadName(name);

    if (!categoryName) {
      throw new NotFoundException(`Category ${name} not found.`);
    }

    return categoryName;
  }
}
