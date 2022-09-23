import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 자신이 원하는 프로필 이미지 링크로 설정
// JavaScript에서는 변수가 상수를 담을때 변수명은 전체 대문자와 _로 구성한다.
const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/97998938?s=400&u=d566207f903355c5903418f7335cea815c97b0ae&v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
