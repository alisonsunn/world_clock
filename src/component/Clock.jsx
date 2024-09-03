import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const StyledClock = styled.div`
  width: ${props => props.width || '200px'};
  aspect-ratio: 1/1;
  background-color: ${ ({ $light, theme}) => $light ? theme.clockBackground.light : theme.clockBackground.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color.dark};
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;
`

function Clock() {
  const [light, setLight] = useState(false);
  return (
    <StyledClock width={"40rem"} $light={light} >clock</StyledClock>
  )
}

export default Clock;