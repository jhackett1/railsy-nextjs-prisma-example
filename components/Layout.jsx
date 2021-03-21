import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/client"

const Layout = props => {
  const router = useRouter()
  const [session, loading] = useSession()

  let links

  if (loading) {
    links = <p>Validating session...</p>
  }

  if (!session) {
    links = (
      <p>
        <Link href="/api/auth/signin">
          <a>Log in</a>
        </Link>
      </p>
    )
  }

  if (session) {
    links = (
      <p>
        {session.user.name || "Unknown name"} /{" "}
        {session.user.email || "Unknown email"}
        <button onClick={() => signOut()}>Log out</button>
      </p>
    )
  }

  return (
    <>
      {links}
      {props.children}
    </>
  )
}

export default Layout
