import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World" />
      <Link to="/info/">To Info</Link>
      {/* Gatsby에서 제공되는 Link 태그를 사용했고 경로를 to라는 이름의 props로 전달했다. */}
    </div>
  )
}

export default IndexPage
