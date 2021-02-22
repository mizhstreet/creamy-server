import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class UniqueQueryArgs {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  slug?: string;
}
