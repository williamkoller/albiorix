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

  @ManyToOne(() => Product, (product) => product.categories, {
    cascade: true,
  })
  @JoinTable()
  product: Product;

  constructor(partial: Partial<Category>) {
    super();
    Object.assign(this, partial);
  }
}
