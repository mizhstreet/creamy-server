import { CreateFlavorResolver } from "./resolvers/flavor/create-flavor/CreateFlavorResolver";
import { DeleteFlavorResolver } from "./resolvers/flavor/delete-flavor/DeleteFlavorResolver";
import { FlavorsResolver } from "./resolvers/flavor/flavors/FlavorsResolver";
import { CreateOptionResolver } from "./resolvers/option/create-option/CreateOptionResolver";
import { DeleteOptionResolver } from "./resolvers/option/delete-option/DeleteOptionResolver";
import { OptionsResolver } from "./resolvers/option/options/OptionsResolver";
import { CreateProductResolver } from "./resolvers/product/create-product/CreateProductResolver";
import { DeleteProductResolver } from "./resolvers/product/delete-product/DeleteProductResolver";
import { ProductsResolver } from "./resolvers/product/products/ProductsResolver";
import { CreateReceiptResolver } from "./resolvers/receipt/create-receipt/CreateReceiptResolver";
import { ItemsFieldResolver } from "./resolvers/receipt/items-field/ItemsFieldResolver";
import { ReceiptResolver } from "./resolvers/receipt/receipt/ReceiptResolver";
import { ReceiptsResolver } from "./resolvers/receipt/receipts/ReceiptsResolver";
import { CreateUserResolver } from "./resolvers/user/create-user/CreateUserResolver";
import { DeleteUserResolver } from "./resolvers/user/delete-user/DeleteUserResolver";
import { LoginResolver } from "./resolvers/user/login/LoginResolver";
import { UpdateUserResolver } from "./resolvers/user/update-user/UpdateUserResolver";
import { UsersResolver } from "./resolvers/user/users/UsersResolver";

export const resolvers = [
  UsersResolver,
  CreateUserResolver,
  UpdateUserResolver,
  DeleteUserResolver,
  CreateOptionResolver,
  OptionsResolver,
  DeleteOptionResolver,
  LoginResolver,
  FlavorsResolver,
  CreateFlavorResolver,
  DeleteFlavorResolver,
  CreateProductResolver,
  DeleteProductResolver,
  ReceiptsResolver,
  CreateReceiptResolver,
  ReceiptResolver,
  ItemsFieldResolver,
  ProductsResolver,
];