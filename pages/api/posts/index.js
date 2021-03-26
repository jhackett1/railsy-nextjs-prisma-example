import prisma from "../../../lib/prisma"

export default async function handle(req, res) {
  let result
  if (req.method === "POST") {
    // CREATE
    const { title, content } = req.body
    result = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    })
  } else {
    // INDEX
    result = await prisma.post.findMany()
  }

  res.json(result)
}
