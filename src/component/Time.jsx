import React from 'react';
import styled from 'styled-components';

const StyleTime = styled.div`
  color: ${({$light, theme}) => $light ? theme.color.light : theme.color.dark }
`

function Time(props) {
  const {light,children} = props;
  return (
    <StyleTime $light={light}>{children}</StyleTime>
  )
}

export default Time;
