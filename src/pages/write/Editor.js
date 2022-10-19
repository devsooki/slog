import React, { useState } from 'react'
import styled from 'styled-components'

const Editor = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const onChange = (e, type) => {
    const {
      target: { value }
    } = e

    if (type === 'title') {
      setTitle(value)
    } else if (type === 'text') {
      setText(value)
    }
  }
  return (
    <Container>
      <Content>
        <Input 
          value={title}
          onChange={e => onChange(e, 'title')}
          placeholder='제목을 입력하세요'
        />
        <TextArea 
          value={text}
          onChange={e => onChange(e, 'text')}
          placeholder='내용을 입력하세요'
        />
        <ButtonContainer>
          <Button>
            등록하기
          </Button>
        </ButtonContainer>
      </Content>
      <Content>
        <Title>
          {title}
        </Title>
        <Text>
          {text}
        </Text>
      </Content>
    </Container>
  )
}

export default Editor

const Container = styled.div`
  display: flex;
  height: calc(100% - 70px);
  overflow: hidden;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  
  &:first-child {
    height: calc(100% - 60px);
    background-color: rgba(255, 255, 255, 0.7);
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  bottom: 0; left: 0;
  padding-right: 20px;
  width: 50%;
  height: 70px;
  background-color: #fff;
`
const Button = styled.button`
  padding: 10px 20px;
  color: #f76f91;
  font-weight: bold;
  border-radius: 20px;
  background-color: #fce4ea;
`
const Input = styled.input`
  padding: 7px;
  width: 100%;
  color: #666;
  font-size: 20px;
  font-weight: bold;
  background: none;
  border: 0;
`
const TextArea = styled.textarea`
  flex: 1;
  padding: 20px 10px;
  width: 100%;
  background: none;
  border: none;
  resize: none;
`
const Title = styled.div`
  padding: 7px;
  color: #666;
  font-size: 20px;
  font-weight: bold;
`
const Text = styled.div`
  flex: 1;
  padding: 20px 10px;
  word-wrap: break-word;
`