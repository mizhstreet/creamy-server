import { itemsLoaderForReceipt } from "./loaders/receipt/ItemsOfReceipt";

export const context = ({ req }: any): any => ({
  req,
  itemsLoaderForReceipt: itemsLoaderForReceipt(),
});
