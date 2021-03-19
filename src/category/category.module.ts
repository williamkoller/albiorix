import { Category } from '@/entities/category';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddCategoryRepository } from '@/category/repositories/add-category/add-category.repository';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { LoadCategoryByNameRepository } from '@/category/repositories/load-category-by-name/add-category-by-name.repository';
import { AddCategoryController } from '@/category/controllers/add-category/add-category.controller';
import { Product } from '@/entities/product';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Product,
      AddCategoryRepository,
      LoadCategoryByNameRepository,
    ]),
  ],
  providers: [AddCategoryService],
  controllers: [AddCategoryController],
})
export class CategoryModule {}
