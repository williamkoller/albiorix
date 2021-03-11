import { User } from '@/entities/user';

export class ReturnUserDto {
  user: User;
  token: string;
}
