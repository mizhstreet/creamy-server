import { Resolver, FieldResolver, Ctx, Root } from "type-graphql";
import { IContext } from "../../../types/IContext";
import { Size } from "../../../entities/Size";
import { Product } from "../../../entities/Product";

@Resolver(() => Product)
export class SizesFieldResolver {
  @FieldResolver(() => [Size])
  async sizes(@Root() product: Product, @Ctx() ctx: IContext): Promise<Size[]> {
    return ctx.sizesLoaderForProduct.load(product.id);
  }
}
