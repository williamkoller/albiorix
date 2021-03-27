import { UpdateCategoryDto } from '@/category/dtos/update-category/update-category.dto';
import { LoadCategoryByIdRepository } from '@/category/repositories/load-category-by-id/load-category-by-id.repository';
import { UpdateCategoryRepository } from '@/category/repositories/update-category/update-category.repository';
import { ReturnMessageType } from '@/shared/@types/return-message/return-message.type';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UpdateCategoryService {
  constructor(
    private readonly loadCategoryByIdRepository: LoadCategoryByIdRepository,
    private readonly updateCategoryRepository: UpdateCategoryRepository,
  ) {}

  async update(
    id: string,
    updatedCategoryDto: UpdateCategoryDto,
  ): Promise<ReturnMessageType> {
    try {
      const category = await this.loadCategoryByIdRepository.loadById(id);
      if (!category) {
        throw new NotFoundException(`Category with ${id} not found.`);
      }
      return await this.updateCategoryRepository.updateCategory(
        id,
        updatedCategoryDto,
      );
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
