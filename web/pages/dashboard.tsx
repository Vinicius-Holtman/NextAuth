import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useCan } from '../hooks/useCan'
import { setupAPIClient } from '../services/api'
import { api } from '../services/apiClient'

import { withSSRAuth } from "../utils/withSSRAuth"

export function Dashboard() {
  const { user } = useContext(AuthContext)

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  })

  useEffect(() => {
    api.get('/me')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  })

  return (
    <>
      <h1>Hello world {user?.email}</h1>

      { userCanSeeMetrics && <h2>Metricas</h2> }
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