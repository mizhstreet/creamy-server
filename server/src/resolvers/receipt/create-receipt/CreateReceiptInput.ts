import { InputType, Field } from "type-graphql";

@InputType()
export class CreateReceiptInput {
  @Field()
  cash: number;

  @Field()
  total: number;

  @Field(() => [CreateReceiptItemInput])
  items: CreateReceiptItemInput[];
}

@InputType()
class CreateReceiptItemInput {
  @Field()
  productid: string;

  @Field()
  price: number;

  @Field()
  quantity: number;

  @Field()
  optionName: string;

  @Field()
  optionPrice: number;

  @Field({ nullable: true })
  sizeName?: string;

  @Field({ nullable: true })
  sizePrice?: number;

  @Field()
  flavors: string;
}
