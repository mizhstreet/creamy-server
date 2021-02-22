import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { User } from "../../../entities/User";
import { LoginInput } from "./LoginInput";
import { IContext } from "../../../types/IContext";

@Resolver()
export class LoginResolver {
  @Mutation(() => User)
  async login(@Arg("data") { username, password }: LoginInput, @Ctx() ctx: IContext): Promise<User> {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw new Error("User not found!");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error("Wrong credentials!");
    }

    ctx.req.session!.userid = user.id;

    return user;
  }
}
