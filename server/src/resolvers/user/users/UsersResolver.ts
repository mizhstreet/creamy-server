import { Resolver, Query } from "type-graphql";
import { User } from "../../../entities/User";

@Resolver()
export class UsersResolver {
  @Query(() => [User], { nullable: true })
  async users(): Promise<User[]> {
    return User.find();
  }
}
