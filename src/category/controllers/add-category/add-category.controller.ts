import { AddCategoryDto } from '@/category/dtos/add-category/add-category.dto';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { Category } from '@/entities/category';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class AddCategoryController {
  constructor(private readonly addCategoryService: AddCategoryService) {}

  @Post()
  async add(@Body() addCategory: AddCategoryDto): Promise<Category> {
    try {
      return await this.addCategoryService.add(addCategory);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
