import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Text from 'components/Text'
import { Link } from 'gatsby'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
      <Link to="/">To Main</Link>
      {/* Gatsby에서 제공되는 Link 태그를 사용했고 경로를 to라는 이름의 props로 전달했다. */}
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
