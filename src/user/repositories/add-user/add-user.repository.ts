import { User } from '@/entities/user';
import { Hasher } from '@/shared/criptography/hasher';
import { AddUserDto } from '@/user/dtos/add-user/add-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateOrReject } from 'class-validator';
import { Repository } from 'typeorm';

@Injectable()
export class AddUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly addUserRepository: Repository<User>,
    private readonly hasher: Hasher,
  ) {}

  async add(addUserDto: AddUserDto): Promise<User> {
    const user = Object.assign({} as User, addUserDto);
    const userCreated = this.addUserRepository.create({
      name: user.name,
      surname: user.surname,
      nickName: user.nickName,
      email: user.email,
      password: await this.hasher.hash(user.password),
      tel: user.tel,
    });
    validateOrReject(userCreated);
    return await this.addUserRepository.save(userCreated);
  }
}
