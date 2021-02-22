import { Resolver, Query } from "type-graphql";
import { Product } from "../../../entities/Product";

@Resolver()
export class ProductsResolver {
  @Query(() => [Product], { nullable: true })
  async products(): Promise<Product[]> {
    return Product.find();
  }
}
