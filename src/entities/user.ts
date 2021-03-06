import { BaseEntity } from '@/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  surname: string;

  @Column({ type: 'varchar', name: 'nick_name' })
  nickName: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  tel: string;

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
