import { Resolver, Mutation, Ctx } from "type-graphql";
import { IContext } from "../../../types/IContext";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: IContext): Promise<boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(false);
        }

        ctx.res.clearCookie("qid");
        return res(true);
      }),
    );
  }
}
