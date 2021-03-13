import { sizesLoaderForProduct } from "./loaders/product/sizesOfProduct";
import { productLoaderForReceiptItem } from "./loaders/receipt-item/ProductOfReceiptItems";
import { itemsLoaderForReceipt } from "./loaders/receipt/ItemsOfReceipt";
import { userLoaderForReceipt } from "./loaders/receipt/UserOfReceipt";

export const context = ({ req }: any): any => ({
  req,
  itemsLoaderForReceipt: itemsLoaderForReceipt(),
  sizesLoaderForProduct: sizesLoaderForProduct(),
  userLoaderForReceipt: userLoaderForReceipt(),
  productLoaderForReceiptItem: productLoaderForReceiptItem(),
});
