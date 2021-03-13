import { Resolver, FieldResolver, Ctx, Root } from "type-graphql";
import { IContext } from "../../../types/IContext";
import { User } from "../../../entities/User";
import { Receipt } from "../../../entities/Receipt";

@Resolver(() => Receipt)
export class UserFieldResolver {
  @FieldResolver(() => [User])
  async user(@Root() receipt: Receipt, @Ctx() ctx: IContext): Promise<User[]> {
    return ctx.userLoaderForReceipt.load(receipt.id);
  }
}
