import * as DataLoader from "dataloader";
import { ReceiptItem } from "../../entities/ReceiptItem";
import { Product } from "../../entities/Product";

const ProductOfReceiptItem = async (receiptsIDs: readonly string[]): Promise<Product[]> => {
  const receipts = await ReceiptItem.findByIds(receiptsIDs as any, {
    relations: ["product"],
  });

  const receiptIDToProduct: { [key: string]: Product } = {};

  receipts.forEach((r) => {
    receiptIDToProduct[r.id] = r.product;
  });

  return receiptsIDs.map((id) => receiptIDToProduct[id]);
};

export const productLoaderForReceiptItem = (): any => new DataLoader(ProductOfReceiptItem);
