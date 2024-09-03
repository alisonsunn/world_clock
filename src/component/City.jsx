import React, { Children } from 'react';
import styled from 'styled-components';

const StyledCity = styled.div`
  margin-bottom: ${props => props.$marginbottom || "1rem"};
  color: ${({$light, theme}) => $light ? theme.color.light : theme.color.dark};
`

function City(props) {
  const {light, children } = props;
  return (
    <StyledCity $marginbottom={"2rem"} $light={light}>
      {children}
    </StyledCity>
  )
}

export default City;


