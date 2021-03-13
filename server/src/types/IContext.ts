import { Request } from "express";
import { sizesLoaderForProduct } from "../loaders/product/sizesOfProduct";
import { productLoaderForReceiptItem } from "../loaders/receipt-item/ProductOfReceiptItems";
import { itemsLoaderForReceipt } from "../loaders/receipt/ItemsOfReceipt";
import { userLoaderForReceipt } from "../loaders/receipt/UserOfReceipt";

declare module "express-session" {
  interface SessionData {
    userid: number;
    isAdmin: boolean;
  }
}

export interface IContext {
  req: Request;
  itemsLoaderForReceipt: ReturnType<typeof itemsLoaderForReceipt>;
  sizesLoaderForProduct: ReturnType<typeof sizesLoaderForProduct>;
  userLoaderForReceipt: ReturnType<typeof userLoaderForReceipt>;
  productLoaderForReceiptItem: ReturnType<typeof productLoaderForReceiptItem>;
}
