import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = (req: MedusaRequest, res: MedusaResponse) => {
  res.json({ message: "Hello, world!" });
};
