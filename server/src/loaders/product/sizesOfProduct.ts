import * as DataLoader from "dataloader";
import { Product } from "../../entities/Product";
import { Size } from "../../entities/Size";

const SizesOfProduct = async (productsIDs: readonly string[]): Promise<Size[][]> => {
  const products = await Product.findByIds(productsIDs as any, {
    relations: ["sizes"],
  });

  const productIDToSizes: { [key: string]: Size[] } = {};

  products.forEach((r) => {
    if (r.id in productIDToSizes) {
      productIDToSizes[r.id].push(...(r.sizes as any));
    } else {
      productIDToSizes[r.id] = [...(r.sizes as any)];
    }
  });

  return productsIDs.map((id) => productIDToSizes[id]);
};

export const sizesLoaderForProduct = (): any => new DataLoader(SizesOfProduct);
