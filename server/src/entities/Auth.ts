import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Auth {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  isLoggedIn: boolean;

  @Field()
  isAdmin: boolean;
}
