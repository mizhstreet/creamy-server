import { Mutation, Resolver, Arg } from "type-graphql";
import { User } from "../../../entities/User";
import { WhereUniqueInput } from "../../../types/input/WhereUniqeInput";

@Resolver()
export class DeleteUserResolver {
  @Mutation(() => User)
  async deleteUser(@Arg("where") { id }: WhereUniqueInput): Promise<User> {
    let user = await User.findOne(id);

    if (!user) {
      throw new Error("User not exist!");
    }
    user = await User.softRemove(user);

    return user;
  }
}
