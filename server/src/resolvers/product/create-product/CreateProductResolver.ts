import { Mutation, Resolver, Arg } from "type-graphql";
import { Product } from "../../../entities/Product";
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../../types/Upload";
import { generateFileName } from "../../../utils/generateFileName";
import { bucket } from "../../../bucket";
import { CreateProductInput } from "./CreateProductInput";
import { Size } from "../../../entities/Size";

@Resolver()
export class CreateProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("data") { name, basePrice, totalFlavor, sizes }: CreateProductInput,
    @Arg("image", () => GraphQLUpload)
    { createReadStream, mimetype }: Upload,
  ): Promise<Product> {
    const fileName = generateFileName(mimetype);

    await bucket.s3Client
      .upload({
        Bucket: "creamybucket",
        Key: fileName,
        Body: createReadStream(),
        ContentType: mimetype,
      })
      .promise();

    const sizeArr = sizes.map((s) => {
      const size = new Size();
      size.name = s.name;
      size.price = s.price;
      return size;
    });

    const product = await Product.create({
      name,
      image: fileName,
      basePrice,
      totalFlavor,
      sizes: sizeArr,
    }).save();
    return product;
  }
}
