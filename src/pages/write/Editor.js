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
  padding: 30px 10px;
`
const Content = styled.div`
  width: 50%;
`
const Input = styled.input`
  padding: 7px 0;
  width: 100%;
  color: #666;
  font-size: 20px;
  font-weight: bold;
  background: none;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid #666;
`
const TextArea = styled.textarea`
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  resize: none;
`
const Title = styled.div`

`
const Text = styled.div`
  word-wrap: break-word;
`