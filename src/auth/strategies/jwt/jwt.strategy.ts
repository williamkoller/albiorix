import { User } from '@/entities/user';
import { LoadUserByIdService } from '@/user/services/load-user-by-id/load-user-by-id.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly loadUserByIdService: LoadUserByIdService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: User['id'] }): Promise<User> {
    const user = await this.loadUserByIdService.loadUserById(payload.sub);
    if (!user) {
      throw new UnauthorizedException('User Unauthorized.');
    }
    return user;
  }
}
