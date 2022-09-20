import React, { FunctionComponent } from 'react'
// FunctionComponent는 react에서 기본으로 제공해주는 함수형 컴포넌트 타입이다.
interface TextProps {
  text: string
}
//FunctionComponent에 TextProps Generic을 추가해서 컴포넌트가 받는 props의 타입을 지정할 수 있다.
const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}</div>
}

export default Text
