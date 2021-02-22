import { Mutation, Resolver, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { User } from "../../../entities/User";
import { UpdateUserInput } from "./UpdateUserInput";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class UpdateUserResolver {
  @Mutation(() => User)
  async updateUser(
    @Arg("data") { username, name, password, isAdmin }: UpdateUserInput,
    @Arg("where") { id }: WhereUniqueInput,
  ): Promise<User> {
    const hashedPassword = password ? await bcrypt.hash(password, 12) : undefined;

    const user = await User.findOne(id);
    if (!user) {
      throw new Error("User not found!");
    }

    user.username = username ? username : user.username;
    user.password = hashedPassword ? hashedPassword : user.password;
    user.isAdmin = isAdmin ? isAdmin : user.isAdmin;
    user.name = name ? name : user.name;

    return user.save();
  }
}
