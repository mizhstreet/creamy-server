import { Mutation, Resolver, Arg } from "type-graphql";
import { Option } from "../../../entities/Option";
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../../types/Upload";
import { generateFileName } from "../../../utils/generateFileName";
import { bucket } from "../../../bucket";
import { CreateOptionInput } from "./CreateOptionInput";

@Resolver()
export class CreateOptionResolver {
  @Mutation(() => Option)
  async createOption(
    @Arg("data") { name, stockPrice, price }: CreateOptionInput,
    @Arg("image", () => GraphQLUpload)
    { createReadStream, mimetype }: Upload,
  ): Promise<Option> {
    const fileName = generateFileName(mimetype);

    await bucket.s3Client
      .upload({
        Bucket: "creamybucket",
        Key: fileName,
        Body: createReadStream(),
        ContentType: mimetype,
      })
      .promise();

    const option = await Option.create({
      name,
      image: fileName,
      stockPrice,
      price,
    }).save();
    return option;
  }
}
