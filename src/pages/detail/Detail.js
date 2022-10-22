import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const { state } = useLocation()

  return (
    <Container>
      detail
    </Container>
  )
}

export default Detail

const Container = styled.div`
  display: flex;
  margin: 50px auto;
  width: 80%;
`