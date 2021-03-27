import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { UpdateCategoryDto } from '@/category/dtos/update-category/update-category.dto';
import { UpdateCategoryService } from '@/category/services/update-category/update-category.service';
import { ReturnMessageType } from '@/shared/@types/return-message/return-message.type';
import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryService: UpdateCategoryService) {}

  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<ReturnMessageType> {
    return await this.updateCategoryService.update(id, updateCategoryDto);
  }
}
