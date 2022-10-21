import React, { useEffect } from 'react'
import styled from 'styled-components'
import { loadLocalStorage } from 'utils/localStorage'

const List = () => {
  
  useEffect(() => {
    
  }, [loadLocalStorage('slog')])

  return (
    <Container>
      <Content>
        <Title>제목</Title>
        <Text>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Text>
        <Date>2022. 10. 21</Date>
      </Content>
      <Content>
        <Title>제목</Title>
        <Text>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Text>
        <Date>2022. 10. 21</Date>
      </Content>
    </Container>
  )
}

export default List

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`
const Content = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: 0;
  }
`
const Title = styled.h1`
  font-size: 20px;
`
const Text = styled.div`
  margin: 10px 0;
  height: 30px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const Date = styled.span`
  color: #666;
  font-size: 12px;
`