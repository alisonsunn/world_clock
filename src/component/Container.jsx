import React from 'react'
import Clock from './Clock'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
`

function Container() {
  return (
    <StyledContainer>
      <Clock city="China" timeZone={8} />
      <Clock city="America" timeZone={-5} />
      <Clock city="Japan" timeZone={9} />
      <Clock city="London" timeZone={0} />
    </StyledContainer>
  )
}

export default Container;
