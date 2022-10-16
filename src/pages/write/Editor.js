import React from 'react'
import styled from 'styled-components'

const Editor = () => {
  return (
    <Container>
      <Input 
        placeholder='제목을 입력하세요'
      />
      <TextArea 
        placeholder='내용을 입력하세요'
      />
    </Container>
  )
}

export default Editor

const Container = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  width: 80%;
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