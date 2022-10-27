import React from 'react';
import { useLocation } from 'react-router-dom';

// style
import styled from 'styled-components';

const Detail = () => {
  const { state } = useLocation()
  const {
    title,
    text,
    date
  } = state

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 80%;
`
const Title = styled.h1`
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 1px solid #ddd;
`
const Text = styled.div`
  font-size: 15px;
  line-height: 25px;
  white-space: pre-line
`