import { Mutation, Resolver, Arg } from "type-graphql";
import { Flavor } from "../../../entities/Flavor";
import { SetStockInput } from "../../../types/input/SetStockInput";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class UpdateStockFlavorResolver {
  @Mutation(() => Flavor)
  async updateStockFlavor(
    @Arg("set") { stock }: SetStockInput,
    @Arg("where") { id }: WhereUniqueInput,
  ): Promise<Flavor> {
    const flavor = await Flavor.findOne(id);

    if (!flavor) {
      throw new Error("Flavor not exist!");
    }
    flavor.stock = stock;

    await flavor.save();
    return flavor;
  }
}
