let uniqueString = require("unique-string");
import * as mime from "mime";

export const generateFileName = (mimetype: string): string => {
  return (uniqueString() as string) + "." + mime.getExtension(mimetype);
};
