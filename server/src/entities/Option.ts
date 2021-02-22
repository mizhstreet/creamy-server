import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Option extends BaseEntity {
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
  stock: number;

  @Field()
  @Column({
    type: "int",
    default: 0,
  })
  price: number;

  @Field()
  @Column({
    type: "int",
  })
  stockPrice: number;

  @Field()
  @UpdateDateColumn()
  created!: Date;

  @Field()
  @UpdateDateColumn()
  updated!: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt?: Date;
}
