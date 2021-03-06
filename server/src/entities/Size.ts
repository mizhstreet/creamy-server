import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class Size extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column({
    type: "varchar",
    length: 50,
  })
  name: string;

  @Field()
  @Column({
    type: "int",
    default: 0,
  })
  price: number;

  @Field()
  @UpdateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt: Date;

  @Field(() => Product, { nullable: true })
  @ManyToOne(() => Product, (product) => product.sizes)
  product: Product;
}
