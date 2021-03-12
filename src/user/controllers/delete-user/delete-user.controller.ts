import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { ReturnMessageType } from '@/shared/@types/return-message/return-message.type';
import { DeleteUserService } from '@/user/services/delete-user/delete-user.service';
import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<ReturnMessageType> {
    return await this.deleteUserService.deleteUser(id);
  }
}
