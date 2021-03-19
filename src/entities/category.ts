import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';
import { BaseEntity } from '@/entities/base.entity';
import { Product } from '@/entities/product';

@Entity('categories')
export class Category extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  type: string;

  @ManyToOne(() => Product, (products) => products.categories, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];
}
