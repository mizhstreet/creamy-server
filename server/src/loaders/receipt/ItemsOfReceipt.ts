import * as DataLoader from "dataloader";
import { Receipt } from "../../entities/Receipt";
import { ReceiptItem } from "../../entities/ReceiptItem";

const ItemsOfReceipt = async (receiptsIDs: readonly string[]): Promise<ReceiptItem[][]> => {
  const receipts = await Receipt.findByIds(receiptsIDs as any, {
    relations: ["items"],
  });

  const receiptIDToItems: { [key: string]: ReceiptItem[] } = {};

  receipts.forEach((r) => {
    if (r.id in receiptIDToItems) {
      receiptIDToItems[r.id].push(...(r.items as any));
    } else {
      receiptIDToItems[r.id] = [...(r.items as any)];
    }
  });

  return receiptsIDs.map((id) => receiptIDToItems[id]);
};

export const itemsLoaderForReceipt = (): any => new DataLoader(ItemsOfReceipt);
