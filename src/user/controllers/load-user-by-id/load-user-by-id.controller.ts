import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { User } from '@/entities/user';
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';
import {
  CacheInterceptor,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class LoadUserByIdController {
  constructor(private readonly loadUserByIdService: LoadUserByIdService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(CacheInterceptor)
  @Get('load-user-by-id/:id')
  async loadUserById(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ): Promise<User> {
    const userId = await this.loadUserByIdService.loadUserById(id);
    delete userId.password;
    return userId;
  }
}
