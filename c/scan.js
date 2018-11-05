import React, { useState, useEffect } from 'react'
import styled from 'react-emotion'

import { client } from '../client'

import { Button, Delete } from './btn'
import Input from './input'

const Item = styled('li')`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  height: 40px;
  margin: 8px 0;
  overflow: hidden;
  border-radius: 2px;
  background-color: #fff;
`

const Link = styled('a')`
  flex: 1;
  padding: 8px;
  text-decoration: none;
  color: #181419;
`

const Name = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex: 3;
  text-decoration: none;
  color: #181419;
  padding-left: 0px;
`

const Controls = styled('div')`
  height: 100%;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ChapInput = styled(Input)`
  max-width: 60px;
`

export default ({ scan: { id, name, uri, chapter } }) => {
  const [chap, setChap] = useState(chapter)

  const down = () => setChap(chap - 1)
  const up = () => setChap(chap + 1)

  const query = `mutation ($id: ID, $scan: ScanInput) {
    updateScan(id: $id, scan: $scan) {
      id
      chapter
    }
  }`
  useEffect(() => client.request(query, { id, scan: { chapter: parseInt(chap) } }), [chap])

  return (
    <Item>
      <Name>
        <Delete />
        <Link target="_blank" href={`${uri}/${chapter}`}>
          {name}
        </Link>
      </Name>
      <Controls>
        <Button text="-" onClick={down} />
        <ChapInput align="center" value={chap} onChange={e => setChap(e.target.value)} />
        <Button text="+" onClick={up} />
      </Controls>
    </Item>
  )
}
