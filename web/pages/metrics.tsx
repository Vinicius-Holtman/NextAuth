import { setupAPIClient } from '../services/api'
import { withSSRAuth } from "../utils/withSSRAuth"


export function Metrics() {
  return (
    <>
      <h1>Metricas</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const reponse = await apiClient.get('/me')

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
})