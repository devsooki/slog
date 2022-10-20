import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Profile = () => {
  const [attachment, setAttachment] = useState('')

  useEffect(() => {
    let profile = localStorage.getItem('profile')
    if (profile !== null) {
      setAttachment(profile)
    }
  }, [localStorage.getItem('profile')])

  const onChangeFile = e => {
    const {
      target: { files }
    } = e

    const theFile = files[0]
    const reader = new FileReader()

    reader.onloadend = finishedEvent => {
      const {
        currentTarget: { result }
      } = finishedEvent

      localStorage.setItem('profile', result)
      setAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }
  const onClearAttachment = () => {
    setAttachment('')
  }

  return (
    <Container>
      <ImageContainer>
        <PreviewImageContainer className={attachment === '' && 'empty-profile-image'}>
          <img src={attachment} alt="profile img" />
          <button onClick={onClearAttachment}>✖️</button>
        </PreviewImageContainer>

        <FileInputContainer>
          <label htmlFor="add_photo">프로필 변경 📸</label>
          <Input id="add_photo" type="file" accept="image/*" onChange={onChangeFile} />
        </FileInputContainer>
      </ImageContainer>

      <UserContainer>
        <b>수키</b>
        <span>
          주니어 개발자의 기록하는 공간✍🏻
        </span>
      </UserContainer>
    </Container>
  )
}

export default Profile

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 50px auto;
  width: 80%;
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const PreviewImageContainer = styled.div`
  position: relative;

  &.empty-profile-image {
    width: 159px;
    height: 150px;
    border-radius: 50%;
    background-color: #ddd;

    img {
      display: none;
    }
    button {
      display: none;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  button {
    position: absolute;
    top: 7px; right: 5px;
    color: #666;
    border: none;
    background: none;
    font-size: 15px;
  }
`
const FileInputContainer = styled.div`
  label {
    color: #666;
    font-size: 12px;
    cursor: pointer;
  }
`
const Input = styled.input`
  padding: 10px;

  &[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
  }
`
const UserContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  b {
    margin-bottom: 10px;
    font-size: 30px;
  }
`