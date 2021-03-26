import Layout from "../../components/Layout"
import Link from "next/link"

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/posts`)
  const posts = await res.json()
  return { props: { posts } }
}

const Index = ({ posts }) => (
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

export default Index
