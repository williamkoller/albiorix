import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { LoadAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { Category } from '@/entities/category';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('categories')
export class LoadAllCategoriesController {
  constructor(
    private readonly loadAllCategoriesService: LoadAllCategoriesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async loadAll(): Promise<Category[]> {
    return await this.loadAllCategoriesService.loadAll();
  }
}
