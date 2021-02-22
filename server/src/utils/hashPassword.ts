import * as bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  let hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};
