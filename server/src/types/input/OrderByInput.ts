import { InputType, Field } from "type-graphql";
import { Direction } from "../enum/Direction";

@InputType()
export class OrderByInput {
  @Field()
  field: string;

  @Field(() => Direction)
  direction: Direction;
}
