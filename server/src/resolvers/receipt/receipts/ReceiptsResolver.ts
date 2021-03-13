import { Resolver, Query, Args } from "type-graphql";
import { Receipt } from "../../../entities/Receipt";
import { PaginationArgs } from "../../../types/arg/PaginationArgs";

@Resolver()
export class ReceiptsResolver {
  @Query(() => [Receipt], { nullable: true })
  async receipts(@Args() { take, skip }: PaginationArgs): Promise<Receipt[]> {
    return Receipt.find({
      take,
      skip,
    });
  }
}
