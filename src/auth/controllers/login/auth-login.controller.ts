import { AuthUserDto } from '@/auth/dtos/auth-user/auth-user.dto';
import { ReturnUserDto } from '@/auth/dtos/return-user/return-user.dto';
import { ValidateUserService } from '@/auth/services/validate-user/validate-user.service';
import {
  BadRequestException,
  Body,
  Controller,
  Logger,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthLoginController {
  private logger = new Logger(AuthLoginController.name);
  constructor(private readonly validateUserService: ValidateUserService) {}

  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'User logged with successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  async async(@Body() authUserDto: AuthUserDto): Promise<ReturnUserDto> {
    try {
      return await this.validateUserService.validateUser(authUserDto);
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException(e.message);
    }
  }
}
