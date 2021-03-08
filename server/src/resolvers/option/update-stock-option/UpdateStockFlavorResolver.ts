import { Mutation, Resolver, Arg } from "type-graphql";
import { Option } from "../../../entities/Option";
import { SetStockInput } from "../../../types/input/SetStockInput";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class UpdateStockOptionResolver {
  @Mutation(() => Option)
  async updateStockOption(
    @Arg("set") { stock }: SetStockInput,
    @Arg("where") { id }: WhereUniqueInput,
  ): Promise<Option> {
    const option = await Option.findOne(id);

    if (!option) {
      throw new Error("Option not exist!");
    }
    option.stock = stock;

    await option.save();
    return option;
  }
}
