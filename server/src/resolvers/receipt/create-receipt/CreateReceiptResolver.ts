import { Mutation, Resolver, Arg, Ctx } from "type-graphql";
import { Receipt } from "../../../entities/Receipt";
import { CreateReceiptInput } from "./CreateReceiptInput";
import { IsAuthorized } from "../../../middlewares/isAuthorized";
import { getUserId } from "../../../utils/getUserId";
import { IContext } from "../../../types/IContext";
import { ReceiptItem } from "../../../entities/ReceiptItem";

@Resolver()
export class CreateReceiptResolver {
  @IsAuthorized()
  @Mutation(() => Receipt)
  async createReceipt(@Arg("data") { items, cash, total }: CreateReceiptInput, @Ctx() ctx: IContext): Promise<Receipt> {
    const itemArr = items.map((i) => {
      const item = new ReceiptItem();
      item.price = i.price;
      item.quantity = i.quantity;
      item.optionName = i.optionName;
      item.optionPrice = i.optionPrice;
      item.sizeName = i.sizeName;
      item.sizePrice = i.sizePrice;
      item.product = { id: i.productid } as any;
      item.flavors = i.flavors;

      return item;
    });

    const receipt = await Receipt.create({
      cash,
      total,
      user: {
        id: getUserId(ctx),
      } as any,
      items: itemArr,
    }).save();

    return receipt;
  }
}
