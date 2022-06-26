import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <h1>Hello world {user?.email}</h1>
  )
}