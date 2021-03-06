import { createMethodDecorator } from "type-graphql";
import { IContext } from "../types/IContext";

export function IsAuthorized(): MethodDecorator {
  return createMethodDecorator<IContext>(async ({ context }, next) => {
    console.log(context.req.session);
    if (!context.req.session!.userid) {
      throw new Error("Authorization required!");
    }
    return next();
  });
}
