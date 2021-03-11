import { User } from '@/entities/user';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
  constructor(private readonly jwtService: JwtService) {}

  async jwtToken(user: User): Promise<string> {
    const payload = {
      sub: user.id,
      name: user.name,
      nickName: user.nickName,
    };

    return this.jwtService.signAsync(payload);
  }
}
