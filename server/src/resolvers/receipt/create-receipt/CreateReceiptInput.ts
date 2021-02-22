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
  productid: number;

  @Field()
  price: number;

  @Field()
  quantity: number;

  @Field()
  optionName: string;

  @Field()
  optionPrice: number;

  @Field()
  sizeName?: string;

  @Field()
  sizePrice?: number;

  @Field()
  flavors: string;
}
