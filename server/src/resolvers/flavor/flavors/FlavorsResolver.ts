import { Resolver, Query } from "type-graphql";
import { Flavor } from "../../../entities/Flavor";

@Resolver()
export class FlavorsResolver {
  @Query(() => [Flavor], { nullable: true })
  async flavors(): Promise<Flavor[]> {
    return Flavor.find();
  }
}
