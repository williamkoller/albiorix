import { User } from '@/entities/user';
import { LoadAllUsersService } from '@/user/services/load-all-users/load-all-users.service';
import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class LoadAllUsersController {
  constructor(private readonly loadAllUsersService: LoadAllUsersService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async loadAll(): Promise<User[]> {
    return await this.loadAllUsersService.loadAll();
  }
}
