import React, { useState } from 'react'
import styled from 'react-emotion'

import { client } from '../client'

import { Button, Delete } from './btn'
import Input from './input'

const Item = styled('form')`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 8px 0;
  padding: 8px;
  overflow: hidden;
  border-radius: 2px;
  background-color: #fff;
  color: #181419;
`
const Control = styled('div')`
  flex: ${({ flex }) => (flex ? flex : 1)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
`

const Label = styled('label')`
  width: 70px;
  text-align: left;
  padding-right: 4px;
`

const Box = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
const FormInput = styled(Input)`
  flex: 1;
  padding: 8px;
  border-radius: 2px;
  background-color: #f1f1f1;
`

const Submit = styled('button')`
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  outline: none;
  border: none;
  color: #fff;
  background: #fc3a51;
  cursor: pointer;
  transition: color 0.3s ease-out;
  &:hover {
    color: #181419;
  }
`

export default () => {
  const [name, setName] = useState('')
  const [uri, setUri] = useState('')
  const [chapter, setChapter] = useState(1)

  const query = `
    mutation createNewScan($input: ScanInput){
      createScan(input: $input){
        id
      }
    }
  `
  const submit = e => {
    client
      .request(query, { input: { name, chapter: parseInt(chapter), uri } })
      .then(() => location.reload())
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Item onSubmit={submit}>
      <Box>
        <Control flex={3}>
          <Label htmlFor="name">Name: </Label>
          <FormInput name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
        </Control>
        <Control>
          <Label htmlFor="chapter">Chapter: </Label>
          <FormInput
            style={{ width: '40px' }}
            name="chapter"
            type="number"
            align="center"
            value={chapter}
            onChange={e => setChapter(e.target.value)}
          />
        </Control>
      </Box>
      <Control>
        <Label htmlFor="uri">Uri: </Label>
        <FormInput name="uri" type="url" value={uri} onChange={e => setUri(e.target.value)} />
      </Control>
      <Control>
        <Submit>ADD</Submit>
      </Control>
    </Item>
  )
}
