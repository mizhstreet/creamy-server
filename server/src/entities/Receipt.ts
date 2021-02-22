import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ReceiptItem } from "./ReceiptItem";
import { User } from "./User";

@ObjectType()
@Entity()
export class Receipt extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column({
    type: "int",
  })
  cash: number;

  @Field()
  @Column({
    type: "int",
  })
  total: number;

  @Field()
  @UpdateDateColumn()
  created!: Date;

  @Field()
  @UpdateDateColumn()
  updated!: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt?: Date;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.receipts, { cascade: true })
  user: User;

  @Field(() => [ReceiptItem], { nullable: true })
  @OneToMany(() => ReceiptItem, (receiptItem) => receiptItem.receipt, { cascade: true })
  items: ReceiptItem[];
}
