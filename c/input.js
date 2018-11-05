import styled from 'react-emotion'

export default styled('input')`
  flex: 1;
  font-size: 15px;
  border: none;
  outline: none;
  text-align: ${props => (props.align ? props.align : 'left')};
`
