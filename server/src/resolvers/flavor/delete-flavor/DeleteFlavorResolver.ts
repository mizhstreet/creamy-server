import { Mutation, Resolver, Arg } from "type-graphql";
import { Flavor } from "../../../entities/Flavor";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class DeleteFlavorResolver {
  @Mutation(() => Flavor)
  async deleteFlavor(@Arg("where") { id }: WhereUniqueInput): Promise<Flavor> {
    let flavor = await Flavor.findOne(id);

    if (!flavor) {
      throw new Error("Flavor not exist!");
    }
    flavor = await Flavor.softRemove(flavor);

    return flavor;
  }
}
