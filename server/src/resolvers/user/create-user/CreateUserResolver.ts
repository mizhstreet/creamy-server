import { Mutation, Resolver, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
import { CreateUserInput } from "./CreateUserInput";
import { User } from "../../../entities/User";
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../../types/Upload";
import { generateFileName } from "../../../utils/generateFileName";
import { bucket } from "../../../bucket";

@Resolver()
export class CreateUserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg("data") { username, name, password, isAdmin }: CreateUserInput,
    @Arg("image", () => GraphQLUpload)
    { createReadStream, mimetype }: Upload,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const fileName = generateFileName(mimetype);

    await bucket.s3Client
      .upload({
        Bucket: "creamybucket",
        Key: fileName,
        Body: createReadStream(),
        ContentType: mimetype,
      })
      .promise();

    const user = await User.create({
      username,
      name,
      password: hashedPassword,
      image: fileName,
      isAdmin,
    }).save();
    return user;
  }
}
