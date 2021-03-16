import { sizesLoaderForProduct } from "./loaders/product/sizesOfProduct";
import { productLoaderForReceiptItem } from "./loaders/receipt-item/ProductOfReceiptItems";
import { itemsLoaderForReceipt } from "./loaders/receipt/ItemsOfReceipt";
import { userLoaderForReceipt } from "./loaders/receipt/UserOfReceipt";

export const context = ({ req, res }: any): any => ({
  req,
  res,
  itemsLoaderForReceipt: itemsLoaderForReceipt(),
  sizesLoaderForProduct: sizesLoaderForProduct(),
  userLoaderForReceipt: userLoaderForReceipt(),
  productLoaderForReceiptItem: productLoaderForReceiptItem(),
});
