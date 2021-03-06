import { User } from '@/entities/user';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { AddUserService } from '@/user/services/add-user/add-user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class AddUserController {
  constructor(private readonly addUSerService: AddUserService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Add a user.',
  })
  @ApiResponse({
    status: 403,
    description: 'A user already exists with this email.',
  })
  async add(@Body() addUserDto: AddUserDto): Promise<User> {
    return await this.addUSerService.addUser(addUserDto);
  }
}
