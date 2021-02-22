import { Resolver, Query } from "type-graphql";
import { Flavor } from "../../../entities/Flavor";
import { IsAuthorized } from "../../../middlewares/isAuthorized";

@Resolver()
export class FlavorsResolver {
  @IsAuthorized()
  @Query(() => [Flavor], { nullable: true })
  async flavors(): Promise<Flavor[]> {
    return Flavor.find();
  }
}
