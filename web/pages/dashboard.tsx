import { useContext, useEffect } from 'react'
import { Can } from '../components/Can'
import { AuthContext } from '../contexts/AuthContext'
import { setupAPIClient } from '../services/api'
import { api } from '../services/apiClient'

import { withSSRAuth } from "../utils/withSSRAuth"

export function Dashboard() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  })

  return (
    <>
      <h1>Hello world {user?.email}</h1>

      <Can permissions={['metrics.list']}>
        <h2>Metricas</h2> 
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const reponse = await apiClient.get('/me')

  return {
    props: {}
  }
})