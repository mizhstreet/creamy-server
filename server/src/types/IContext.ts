import { Request } from "express";
import { itemsLoaderForReceipt } from "../loaders/receipt/ItemsOfReceipt";
// import { authorsLoaderForBook } from "../loaders/book/authorsOfBook";
// import { booksLoaderForPublisher } from "../loaders/publisher/booksOfPublisher";
// import { booksLoaderForAuthor } from "../loaders/author/booksOfAuthor";
// import { publisherLoaderForBook } from "../loaders/book/publisherOfBook";
// import { categoryLoaderForBook } from "../loaders/book/categoryOfBook";
// import { booksLoaderForCategory } from "../loaders/category/booksOfCategory";
// import { orderItemsLoaderForOrder } from "../loaders/order/orderItemsOfOrder";
// import { bookLoaderForOrderItem } from "../loaders/orderItem/bookOfOrderItem";
// import { userLoaderForReview } from "../loaders/review/userOfReview";
declare module "express-session" {
  interface SessionData {
    userid: number;
    isAdmin: boolean;
  }
}

export interface IContext {
  req: Request;
  itemsLoaderForReceipt: ReturnType<typeof itemsLoaderForReceipt>;
  // authorsLoaderForBook: ReturnType<typeof authorsLoaderForBook>;
  // publisherLoaderForBook: ReturnType<typeof publisherLoaderForBook>;
  // categoryLoaderForBook: ReturnType<typeof categoryLoaderForBook>;
  // booksLoaderForPublisher: ReturnType<typeof booksLoaderForPublisher>;
  // booksLoaderForAuthor: ReturnType<typeof booksLoaderForAuthor>;
  // booksLoaderForCategory: ReturnType<typeof booksLoaderForCategory>;
  // bookLoaderForOrderItem: ReturnType<typeof bookLoaderForOrderItem>;
  // orderItemsLoaderForOrder: ReturnType<typeof orderItemsLoaderForOrder>;
  // userLoaderForReview: ReturnType<typeof userLoaderForReview>;
}
