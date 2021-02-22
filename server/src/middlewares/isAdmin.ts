import { createMethodDecorator } from "type-graphql";
import { IContext } from "../types/IContext";

export function IsAdmin(): MethodDecorator {
  return createMethodDecorator<IContext>(async ({ context }, next) => {
    if (!context.req.session!.isAdmin) {
      throw new Error("Authorization required!");
    }
    return next();
  });
}
