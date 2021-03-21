import prisma from "../../../lib/prisma"

export default async function handle(req, res) {
  const id = req.query.id

  if (req.method === "DELETE") {
    // DESTROY
    const post = await prisma.post.delete({
      where: { id: Number(id) },
    })
    res.json(post)
  } else if (req.method === "PUT") {
    // UPDATE
    const { title, content } = req.body
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { title: title, content: content },
    })
    res.json(post)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
