import React from 'react'
import { useNavigate } from 'react-router-dom'

// style
import styled from 'styled-components'

const Header = () => {
  const navigate = useNavigate()

  const onClickMene = menu => {
    navigate(menu);
  }

  return (
    <Container>
      <Logo onClick={() => onClickMene('/')}>
        Slog
      </Logo>
      <Menu onClick={() => onClickMene('/write')}>
        새글작성
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
  padding: 10px 15px;
  font-size: 13px;
  background: none;
  border: 1px solid #000;
  border-radius: 20px;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`