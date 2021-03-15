import { Resolver, Query, Ctx } from "type-graphql";
import { Auth } from "../../../entities/Auth";
import { User } from "../../../entities/User";
import { IsAuthorized } from "../../../middlewares/isAuthorized";
import { IContext } from "../../../types/IContext";
import { getUserId } from "../../../utils/getUserId";

@Resolver()
export class MeResolver {
  @Query(() => Auth)
  @IsAuthorized()
  async me(@Ctx() ctx: IContext): Promise<Auth> {
    const id = getUserId(ctx);

    const user = await User.findOne(id);

    if (!user) {
      throw new Error("Not authorized!");
    }

    return {
      isLoggedIn: true,
      isAdmin: user.isAdmin,
      id,
      image: user.image,
      name: user.name,
    };
  }
}
