import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  password: string;

  @Field()
  isAdmin: boolean;
}
