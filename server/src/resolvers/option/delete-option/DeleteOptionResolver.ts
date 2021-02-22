import { Mutation, Resolver, Arg } from "type-graphql";
import { Option } from "../../../entities/Option";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class DeleteOptionResolver {
  @Mutation(() => Option)
  async deleteOption(@Arg("where") { id }: WhereUniqueInput): Promise<Option> {
    let option = await Option.findOne(id);

    if (!option) {
      throw new Error("Option not exist!");
    }
    option = await Option.softRemove(option);

    return option;
  }
}
