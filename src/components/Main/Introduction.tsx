import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  height: 150px;
`
const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 987px;
  height: 100px;
  margin: 0 auto;
  gap: 18px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 300;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <Title>codnr98</Title>
      </Wrapper>
    </Background>
  )
}

export default Introduction
