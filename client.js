import { useState, useEffect } from 'react'
import { request, GraphQLClient } from 'graphql-request'
import 'isomorphic-fetch'

export const client = new GraphQLClient('/api')

const useGraphQL = (query, data) => {
  const [state, setState] = useState({ loading: true })

  useEffect(
    () => request('/api', query, data).then(res => setState({ data: res, loading: false })),
    [],
  )

  return state
}
export default useGraphQL
