import prisma from "../../../lib/prisma"

export default async function handle(req, res) {
  const id = req.query.id

  let post

  if (req.method === "DELETE") {
    // DESTROY
    post = await prisma.post.delete({
      where: { id: Number(id) },
    })
  } else if (req.method === "PUT") {
    // UPDATE
    const { title, content } = req.body
    post = await prisma.post.update({
      where: { id: Number(id) },
      data: { title: title, content: content },
    })
  } else {
    // SHOW
    post = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    })
  }

  res.json(post)
}
