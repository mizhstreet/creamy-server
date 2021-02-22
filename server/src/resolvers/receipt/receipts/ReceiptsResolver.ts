import { Resolver, Query } from "type-graphql";
import { Receipt } from "../../../entities/Receipt";

@Resolver()
export class ReceiptsResolver {
  @Query(() => [Receipt], { nullable: true })
  async receipts(): Promise<Receipt[]> {
    return Receipt.find();
  }
}
