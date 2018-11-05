import React, { useState } from 'react'
import styled from 'react-emotion'

const Del = styled('button')`
  width: 40px;
  min-height: 100%;
  outline: none;
  border: none;
  background: none;
  color: #fff;
  padding: 0;
  background-color: #fc3a51;
  transition: left 0.3s ease-in;
  cursor: pointer;
`
const DelText = styled('span')`
  display: block;
  font-size: 16px;
  transition: transform 0.3s ease;
  transform: rotate(0deg);

  &:hover {
    transform: rotate(90deg);
  }
`

const Action = styled('button')`
  outline: none;
  border: none;
  background: none;
  font-size: 22px;
  font-weight: bold;
  line-height: 16px;
  color: #fc3a51;
  width: 24px;
  height: 24px;
  padding: 4px;
  cursor: pointer;
`

export const Delete = props => (
  <Del {...props}>
    <DelText>✖</DelText>
  </Del>
)

export const Button = ({ text, ...props }) => <Action {...props}>{text}</Action>
