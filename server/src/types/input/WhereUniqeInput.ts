import { InputType, Field } from "type-graphql";

@InputType()
export class WhereUniqueInput {
  @Field()
  id: number;
}
