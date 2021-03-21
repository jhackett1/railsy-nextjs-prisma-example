import Layout from "../../../components/Layout"
import Router from "next/router"
import Link from "next/link"
import { Formik, Form, Field } from "formik"
import PostForm from "../../../components/PostForm"

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

const Edit = post => {
  const handleSubmit = async values => {
    try {
      await fetch(`/api/post/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      await Router.push("/posts")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <h1>Editing post</h1>

      <PostForm initialValues={post} onSubmit={handleSubmit} />

      <Link href="/posts">
        <a>Back to posts</a>
      </Link>
    </Layout>
  )
}

export default Edit
