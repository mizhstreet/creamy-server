import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class CreateFlavorInput {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  stockPrice: number;
}
