import prisma from "../../../lib/prisma"

export default async function handle(req, res) {
  // CREATE
  const { title, content } = req.body
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  })
  res.json(result)
}
