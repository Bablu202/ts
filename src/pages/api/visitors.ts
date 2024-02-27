import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const visitors = await prisma.visitors.findMany();
    res.status(200).json(visitors);
  }
  res.status(200).json({ id: 1 });
}
