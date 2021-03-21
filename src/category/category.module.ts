import { Category } from '@/entities/category';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/load-category-by-name.repository';
import { AddCategoryController } from '@/category/controllers/add-category/add-category.controller';
import { Product } from '@/entities/product';
import { LoadAllCategoriesRepository } from '@/category/repositories/load-all-categories/load-all-categories.repository';
import { LoadAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { LoadAllCategoriesController } from '@/category/controllers/load-all-categories/load-all-categories.controller';
import { LoadCategoryByNameService } from '@/category/services/load-category-by-name/load-category-by-name.service';
import { LoadCategoryByNameController } from '@/category/controllers/load-category-by-name/load-category-by-name.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Product,
      AddCategoryRepository,
      LoadCategoryByNameRepository,
      LoadAllCategoriesRepository,
    ]),
  ],
  providers: [
    AddCategoryService,
    LoadAllCategoriesService,
    LoadCategoryByNameService,
  ],
  controllers: [
    AddCategoryController,
    LoadAllCategoriesController,
    LoadCategoryByNameController,
  ],
})
export class CategoryModule {}
