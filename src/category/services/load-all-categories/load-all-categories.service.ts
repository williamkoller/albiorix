import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { Category } from '@/entities/category';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadAllCategoriesService {
  constructor(
    private readonly loadAllCategoriesRepository: LoadAllCategoriesRepository,
  ) {}

  async loadAll(): Promise<Category[]> {
    const categories = await this.loadAllCategoriesRepository.loadAll();

    if (categories?.length === 0) {
      throw new NotFoundException('No record found.');
    }
    return categories;
  }
}
