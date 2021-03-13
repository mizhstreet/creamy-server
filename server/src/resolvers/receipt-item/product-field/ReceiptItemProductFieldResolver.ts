import { Resolver, FieldResolver, Ctx, Root } from "type-graphql";
import { IContext } from "../../../types/IContext";
import { Product } from "../../../entities/Product";
import { ReceiptItem } from "../../../entities/ReceiptItem";

@Resolver(() => ReceiptItem)
export class ReceiptItemProductFieldResolver {
  @FieldResolver(() => [Product])
  async product(@Root() receipt: ReceiptItem, @Ctx() ctx: IContext): Promise<Product[]> {
    return ctx.productLoaderForReceiptItem.load(receipt.id);
  }
}
