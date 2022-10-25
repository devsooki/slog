import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { loadLocalStorage } from 'utils/localStorage'

const List = () => {
  const navigate = useNavigate()
  const list = loadLocalStorage('slog')

  const onClickDetail = detail => {
    navigate('/detail', {
      state: detail
    })
  }

  return (
    <Container>
      {
        list === null ? (
          <EmptyContainer>
            작성된 글이 없습니다.
          </EmptyContainer>
        ) : (
          <>
            {list.map((item, index) => (
              <Content 
                key={index}
                onClick={() => onClickDetail(item)}
              >
                <Title>{item.title}</Title>
                <Text>
                  {item.text}
                </Text>
                <Date>{item.date}</Date>
              </Content>
            ))}
          </>
        )
      }
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
const EmptyContainer = styled.div`
  padding: 50px 0;
  color: #666;
  text-align: center;
`
const Content = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`
const Title = styled.h1`
  font-size: 20px;
`
const Text = styled.div`
  margin: 10px 0;
  max-height: 30px;
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