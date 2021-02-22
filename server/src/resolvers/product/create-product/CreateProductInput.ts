import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class CreateProductInput {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  basePrice: number;

  @Field()
  totalFlavor: number;

  @Field(() => [CreateSizeInput])
  sizes: CreateSizeInput[];
}

@InputType()
class CreateSizeInput {
  @Field()
  name: string;

  @Field()
  price: number;
}
