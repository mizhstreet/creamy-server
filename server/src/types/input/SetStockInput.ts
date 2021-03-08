import { InputType, Field } from "type-graphql";

@InputType()
export class SetStockInput {
  @Field()
  stock: number;
}
