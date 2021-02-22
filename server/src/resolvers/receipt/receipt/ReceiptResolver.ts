import { Resolver, Query, Arg } from "type-graphql";
import { Receipt } from "../../../entities/Receipt";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class ReceiptResolver {
  @Query(() => Receipt, { nullable: true })
  async receipt(@Arg("where") { id }: WhereUniqueInput): Promise<Receipt> {
    const receipt = await Receipt.findOne(id);

    if (!receipt) {
      throw new Error("Receipt not found!");
    }

    return receipt;
  }
}
