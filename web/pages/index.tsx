import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} />
        <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (cookies['nextauth.token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

