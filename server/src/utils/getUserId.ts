import { IContext } from "../types/IContext";

export function getUserId(ctx: IContext): number {
  if (!ctx.req.session!.userid) {
    throw new Error("Authentication required!");
  }
  return ctx.req.session!.userid;
}
