import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { text } = req.body;
    const todo = await prisma.todo.create({
      data: { text },
    });
    res.status(201).json(todo);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
