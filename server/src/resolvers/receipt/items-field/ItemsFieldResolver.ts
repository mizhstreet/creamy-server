import { Resolver, FieldResolver, Ctx, Root } from "type-graphql";
import { IContext } from "../../../types/IContext";
import { ReceiptItem } from "../../../entities/ReceiptItem";
import { Receipt } from "../../../entities/Receipt";

@Resolver(() => Receipt)
export class ItemsFieldResolver {
  @FieldResolver(() => [ReceiptItem])
  async items(@Root() receipt: Receipt, @Ctx() ctx: IContext): Promise<ReceiptItem[]> {
    return ctx.itemsLoaderForReceipt.load(receipt.id);
  }
}
