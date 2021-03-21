import Layout from "../../components/Layout"
import prisma from "../../lib/prisma"
import Link from "next/link"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany()
  return { props: { posts } }
}

const Index = ({ posts }) => {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return <p>checking...</p>

  if (session)
    return (
      <Layout>
        <h1>Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <Link href={`/posts/${post.id}`}>
                    <a>Show</a>
                  </Link>
                  <Link href={`/posts/${post.id}/edit`}>
                    <a>Edit</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link href="/posts/new">
          <a>New post</a>
        </Link>
      </Layout>
    )

  return <p>bugger off</p>
}

export default Index
