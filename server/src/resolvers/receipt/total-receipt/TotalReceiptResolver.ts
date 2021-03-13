import { Resolver, Query, Int } from "type-graphql";
import { Receipt } from "../../../entities/Receipt";

@Resolver()
export class TotalReceiptResolver {
  @Query(() => Int, { nullable: true })
  async totalReceipt(): Promise<number> {
    return Receipt.count();
  }
}
