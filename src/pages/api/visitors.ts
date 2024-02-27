import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const visitors = await prisma.visitors.findUnique({
      where: { id: 1 },
    });
    res.status(200).json(visitors);
  }
  res.status(200).json({ id: 1 });

  if (req.method === "PUT") {
    const id = req.query.id;
    const { count } = req.body;

    const visitors = await prisma.visitors.update({
      where: { id: 1 },
      data: { count: count },
    });
    res.status(200).json(visitors);
  }
}
