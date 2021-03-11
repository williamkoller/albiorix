import { User } from '@/entities/user';
import { LoadUserByNameService } from '@/user/services/load-user-by-name/load-user-by-name.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class LoadUserByNameController {
  constructor(private readonly loadUserByNameService: LoadUserByNameService) {}

  @Get('/load-user-by-name/:name')
  async loadUserByName(@Param('name') name: string): Promise<User> {
    return await this.loadUserByNameService.loadUserByName(name);
  }
}
