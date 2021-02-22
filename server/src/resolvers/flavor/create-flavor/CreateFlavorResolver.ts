import { Mutation, Resolver, Arg } from "type-graphql";
import { Flavor } from "../../../entities/Flavor";
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../../types/Upload";
import { generateFileName } from "../../../utils/generateFileName";
import { bucket } from "../../../bucket";
import { CreateFlavorInput } from "./CreateFlavorInput";

@Resolver()
export class CreateFlavorResolver {
  @Mutation(() => Flavor)
  async createFlavor(
    @Arg("data") { name, stockPrice }: CreateFlavorInput,
    @Arg("image", () => GraphQLUpload)
    { createReadStream, mimetype }: Upload,
  ): Promise<Flavor> {
    const fileName = generateFileName(mimetype);

    await bucket.s3Client
      .upload({
        Bucket: "creamybucket",
        Key: fileName,
        Body: createReadStream(),
        ContentType: mimetype,
      })
      .promise();

    const option = await Flavor.create({
      name,
      image: fileName,
      stockPrice,
    }).save();
    return option;
  }
}
