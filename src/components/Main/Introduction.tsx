import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`
const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 1020px;
  height: 100px;
  margin: 0 auto;
  gap: 12px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  } ;
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`
const Title = styled.div`
  margin-top: 5px;
  font-size: 25px;
  font-weight: 700;
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
