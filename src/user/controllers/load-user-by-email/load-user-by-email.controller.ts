import { User } from '@/entities/user';
import { LoadUserByEmailDto } from '@/user/dtos/load-user-by-email/load-user-by-email.dto';
import { LoadUserByEmailService } from '@/user/services/load-user-by-email/load-user-by-email.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class LoadUserByEmailController {
  constructor(
    private readonly loadUserByEmailService: LoadUserByEmailService,
  ) {}

  @Get(':email')
  async loadUserByEmail(
    @Param() loadUserByEmailDto: LoadUserByEmailDto,
  ): Promise<User> {
    const user = await this.loadUserByEmailService.loadUserByEmail(
      loadUserByEmailDto.email,
    );

    delete user.password;

    return user;
  }
}
