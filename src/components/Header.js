import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Logo>
        Slog
      </Logo>
      <Menu>
        📝
      </Menu>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.3);
`
const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 5px;
  cursor: pointer;
`
const Menu = styled.button`
  font-size: 20px;
  background: none;
`