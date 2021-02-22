import { Resolver, Query } from "type-graphql";
import { Option } from "../../../entities/Option";

@Resolver()
export class OptionsResolver {
  @Query(() => [Option], { nullable: true })
  async options(): Promise<Option[]> {
    return Option.find();
  }
}
