import React from 'react'
import styled from 'styled-components';

const StyledCore = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  width: ${({ $block_size }) => $block_size}px;
  aspect-ratio: 1/1;
  z-index: ${({ $z_index }) => $z_index};
  transform: rotate(${({ $angle }) => $angle}deg);
  &::before{
    content: "";
    width: ${({ $pointer_width }) => $pointer_width}px;
    height: ${({ $block_size, $tail }) => `calc(${$block_size / 2}px + ${$tail}px)`};
    background: ${({ $light, $pointer_light, $pointer_dark }) => $light ? $pointer_light : $pointer_dark};
    border-radius: ${({ pointerRadius }) => pointerRadius};
  }
`

export const Core = (props) => {
  const { ...rest } = props;

  return (
    <StyledCore 
      $z_index="0"
      $angle="0"
      $tail="0"
      
      {...rest} />
  )
}

export default Core;