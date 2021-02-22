import { Mutation, Resolver, Arg } from "type-graphql";
import { Product } from "../../../entities/Product";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class DeleteProductResolver {
  @Mutation(() => Product)
  async deleteProduct(@Arg("where") { id }: WhereUniqueInput): Promise<Product> {
    let product = await Product.findOne(id);

    if (!product) {
      throw new Error("Product not exist!");
    }
    product = await Product.softRemove(product);

    return product;
  }
}
