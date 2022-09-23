import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 컴포넌트 타입 정의
export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 string, 프로퍼티 값은 number임을 나타내는 표기 방법
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <div key={name}>
          #{name}({count})
        </div>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
