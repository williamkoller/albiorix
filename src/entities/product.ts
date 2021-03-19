import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Category } from './category';

@Entity('products')
export class Product extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int4' })
  price: number;

  @OneToMany(() => Category, (category) => category.product, { eager: true })
  @JoinTable()
  categories: Category[];

  constructor(partial: Partial<Product>) {
    super();
    Object.assign(this, partial);
  }
}
