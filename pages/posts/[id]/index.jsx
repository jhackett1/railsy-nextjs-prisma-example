import React from "react"
import Link from "next/link"
import Layout from "../../../components/Layout"
import Router from "next/router"
import prisma from "../../../lib/prisma"

export const getServerSideProps = async ({ params }) => {
  const post = await prisma.post.findFirst({
    where: {
      id: Number(params?.id) || -1,
    },
  })
  return {
    props: post,
  }
}

const destroyPost = async id => {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  })
  Router.push("/posts")
}

const Show = ({ id, title, content }) => (
  <Layout>
    <h1>Post</h1>

    <p>
      <strong>Title:</strong> {title}
    </p>
    <p>
      <strong>Content:</strong> {content}
    </p>

    <Link href={`/posts/${id}/edit`}>
      <a>Edit</a>
    </Link>

    <button onClick={() => destroyPost(id)}>Destroy</button>

    <Link href="/posts">
      <a>Back to posts</a>
    </Link>
  </Layout>
)

export default Show
