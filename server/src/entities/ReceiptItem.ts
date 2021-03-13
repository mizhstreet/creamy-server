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
import { Receipt } from "./Receipt";

@ObjectType()
@Entity()
export class ReceiptItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column({
    type: "int",
  })
  price: number;

  @Field()
  @Column({
    type: "int",
  })
  quantity: number;

  @Field()
  @Column({
    type: "varchar",
    nullable: true,
  })
  optionName: string;

  @Field()
  @Column({
    type: "int",
    nullable: true,
  })
  optionPrice: number;

  @Field({ nullable: true })
  @Column({
    type: "varchar",
    nullable: true,
  })
  sizeName?: string;

  @Field({ nullable: true })
  @Column({
    type: "int",
    nullable: true,
  })
  sizePrice?: number;

  @Field()
  @Column({
    type: "varchar",
  })
  flavors: string;

  @Field()
  @UpdateDateColumn()
  created!: Date;

  @Field()
  @UpdateDateColumn()
  updated!: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt?: Date;

  @Field(() => Receipt, { nullable: true })
  @ManyToOne(() => Receipt, (receipt) => receipt.items)
  receipt: Receipt;

  @Field(() => Product, { nullable: true })
  @ManyToOne(() => Product)
  product: Product;
}
