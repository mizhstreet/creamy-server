import * as uniqid from "uniqid";
import slugify from "slugify";

export const generateSlug = (input: string): string => {
  let slug = slugify(`${input} ${uniqid.time()}`, { lower: true });
  return slug;
};
