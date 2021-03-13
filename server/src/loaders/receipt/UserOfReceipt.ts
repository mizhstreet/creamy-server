import * as DataLoader from "dataloader";
import { Receipt } from "../../entities/Receipt";
import { User } from "../../entities/User";

const UserOfReceipt = async (receiptsIDs: readonly string[]): Promise<User[]> => {
  const receipts = await Receipt.findByIds(receiptsIDs as any, {
    relations: ["user"],
  });

  const receiptIDToUser: { [key: string]: User } = {};

  receipts.forEach((r) => {
    receiptIDToUser[r.id] = r.user;
  });

  return receiptsIDs.map((id) => receiptIDToUser[id]);
};

export const userLoaderForReceipt = (): any => new DataLoader(UserOfReceipt);
