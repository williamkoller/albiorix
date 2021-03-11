import { User } from '@/entities/user';
import { UserProfileType } from '@/user/@types/user-profile/user-profile.type';
import { LoadUserProfileService } from '@/user/services/load-user-profile/load-user-profile.service';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthMeController {
  constructor(
    private readonly loadUserProfileService: LoadUserProfileService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async loadUserProfile(@Request() user: User): Promise<UserProfileType> {
    return await this.loadUserProfileService.loadUserProfile(user.id);
  }
}
