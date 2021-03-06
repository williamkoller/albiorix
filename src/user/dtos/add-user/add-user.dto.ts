import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class AddUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsEmpty()
  nickName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmpty()
  tel: string;
}
