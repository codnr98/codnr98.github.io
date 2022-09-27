import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
const PostList: FunctionComponent = function () {
  return <PostListWrapper></PostListWrapper>
}
// 왜? ...를 써야할까?
// 이유 일단 컴포넌트 Props로 배열이 오면 안되서 인듯
export default PostList
