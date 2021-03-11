import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoadUserByEmailDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
