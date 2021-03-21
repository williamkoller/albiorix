import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { LoadCategoryByNameService } from '@/category/services/load-category-by-name/load-category-by-name.service';
import { Category } from '@/entities/category';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class LoadCategoryByNameController {
  constructor(
    private readonly loadCategoryNameService: LoadCategoryByNameService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('load-category-by-name/:name')
  async loadName(@Param('name') name: string): Promise<Category[]> {
    return await this.loadCategoryNameService.loadName(name);
  }
}
