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
import { Receipt } from "./Receipt";

@ObjectType()
@Entity()
export class User extends BaseEntity {
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
    length: 16,
    unique: true,
  })
  username: string;

  @Field()
  @Column({
    type: "varchar",
    length: "500",
  })
  password: string;

  @Field()
  @Column({
    type: "boolean",
    default: "false",
  })
  isAdmin: boolean;

  @Field()
  @Column({
    type: "varchar",
    length: 500,
  })
  image: string;

  @Field()
  @UpdateDateColumn()
  created!: Date;

  @Field()
  @UpdateDateColumn()
  updated!: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt?: Date;

  @Field(() => [Receipt], { nullable: true })
  @OneToMany(() => Receipt, (receipt) => receipt.user)
  receipts: Receipt[];
}
