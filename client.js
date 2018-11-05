import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import 'isomorphic-fetch'

const useGraphQL = (query, data) => {
  const [state, setState] = useState({ loading: true })

  useEffect(
    () => request('/api', query, data).then(res => setState({ data: res, loading: false })),
    [],
  )

  return state
}
export default useGraphQL
