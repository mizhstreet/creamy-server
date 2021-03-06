import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Size } from "./Size";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
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
    type: "varchar",
    length: 500,
  })
  image: string;

  @Field()
  @Column({
    type: "int",
    default: 0,
  })
  basePrice: number;

  @Field()
  @Column({
    type: "int",
  })
  totalFlavor: number;

  @Field()
  @UpdateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt: Date;

  @Field(() => [Size])
  @OneToMany(() => Size, (size) => size.product, { cascade: ["insert", "update"] })
  sizes: Size[];
}
