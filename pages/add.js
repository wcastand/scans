import React from 'react'
import styled from 'react-emotion'

import Suspense from '../c/fakeSuspense'
import useGraphQL from '../client'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
  }
  html, body {
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
`

const query = `{ allScans { id name uri chapter } }`

const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default () => {
  const { loading, data } = useGraphQL(query)
  return (
    <Suspense fallback={<div>Loading...</div>} loading={loading}>
      {() => (
        <List>
          {data.allScans.map(scan => (
            <li key={scan.id}>{scan.name}</li>
          ))}
        </List>
      )}
    </Suspense>
  )
}
