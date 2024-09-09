import React from 'react';
import styled from 'styled-components';

const StyledCenter = styled.div`
  width: ${({$size}) => $size};
  aspect-ratio: 1/1;
  background: ${({$light, $bg_black, $bg_white}) => $light? $bg_black : $bg_white};
  border: ${({$light, $border_black, $border_white}) => $light? $border_black : $border_white};
  border-radius: 50%;
  z-index: 999;
`
function Center(props) {
  const {light} = props;
  return (
    <StyledCenter
      $size="15px"
      $bg_black="#848484"
      $bg_white="#fff"
      $border_white="2px solid #fff"
      $border_black="2px solid #848484"
      $light={light}
    ></StyledCenter>
  )
}

export default Center;