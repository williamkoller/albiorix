import { User } from '@/entities/user';
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';
import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class LoadUserByIdController {
  constructor(private readonly loadUserByIdService: LoadUserByIdService) {}

  @Get('load-user-by-id/:id')
  async loadUserById(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ): Promise<User> {
    return await this.loadUserByIdService.loadUserById(id);
  }
}
