import { UserProfileType } from '@/user/@types/user-profile/user-profile.type';
import { LoadUserByIdRepository } from '@/user/repositories/load-user-by-id/load-user-by-id.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadUserProfileService {
  constructor(
    private readonly loadUSerByIdRepository: LoadUserByIdRepository,
  ) {}

  async loadUserProfile(id: string): Promise<UserProfileType> {
    const user = await this.loadUSerByIdRepository.loadUserById(id);

    const userProfileType: UserProfileType = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      nickName: user.nickName,
      email: user.email,
      tel: user.tel,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return userProfileType;
  }
}
