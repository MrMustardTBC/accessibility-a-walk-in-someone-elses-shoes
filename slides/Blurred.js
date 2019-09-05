import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  filter: blur(10px);
`

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)