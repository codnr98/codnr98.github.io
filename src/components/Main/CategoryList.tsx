import React, { FunctionComponent } from 'react'
import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  // ReactNode는 children 타입형식중 하나며 React elements, primitives, portals, fragments 모든것을 받아들인다.
  className?: string
  to: string
} & CategoryItemProps

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
  flex-direction: column;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    overflow-y: auto;
    padding: 0 20px;
  }
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  color: ${({ active }) => (active ? '#0a7ea3' : '')};
  cursor: pointer;

  :hover {
    color: #0a7ea3;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
// &: last-of-type {} 이렇게 &:앞에 스페이스 넣으면 적용안됨 !!!!!!!!!!!!!!!!!!!! 이거 30분동안 삽질함 ㅋㅋ

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
