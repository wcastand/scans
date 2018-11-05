import React from 'react'
import { injectGlobal } from 'emotion'

import Suspense from '../c/fakeSuspense'
import useGraphQL from '../client'

import Layout from '../c/layout'
import List from '../c/list'
import Scan from '../c/scan'

const query = `{ allScans { id name uri chapter} }`

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #181419;
    background-color: #FFF;
    background: #FFF url("/static/pattern.png") repeat fixed center;
    background-size: 35%;
  }
`

export default () => {
  const { loading, data } = useGraphQL(query)
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>} loading={loading}>
        {() => (
          <List>
            {data.allScans.map(scan => (
              <Scan scan={scan} key={scan.id} />
            ))}
          </List>
        )}
      </Suspense>
    </Layout>
  )
}
