---
date: '2022-10-06'
title: '[React]styled-component'
categories: ['Web', 'React', 'styled-component']
summary: 'styled-component란?'
thumbnail: './Playing-with-Styled-Components.png'
---

# styled-component

## CSS-IN-JS

<pre>
이전 웹사이트는 HTML CSS JS 파일을 따로 나누어 관리하는 것이 가장 좋은 방법으로 여겨졌었다.
하지만 React Vue와 같은 모던자바스크립트 라이브러리들이 탄생하면서 여러 개의 컴포넌트를 분리하고
각 컴포넌트에 HTML CSS JS를 같이 다루는 관리법으로 발전하게 되었다.

styled-component는 CSS-IN-JS 라이브러리 중에서도 가장 많이 사용되고있다.
</pre>

## 컴포넌트 단위 스타일링

```jsx
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>,
)
```

<pre>
css in js스타일에 최적화 돼있다. style-component로 생성된 컴포넌트들은 빌드시 임의로 중복되지
않는 렘덤한 클래스명을 생성해서 class name bug등을 방지할 수 있다.
</pre>

## 확장형 스타일링

```jsx
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>,
) // Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>,
)
```

<pre>
기존에 만든 컴포넌트 스타일에서 추가하는 것이 가능하다 중복코드를 줄이고

기존 컴포넌트에 스타일을 추가하는 것이 가능하여 서드파티 컴포넌트와도 호환할 수 있다. 
예시로 React-router-dom의 Link 컴포넌트를 가져와 추가로 스타일을 적용할 수 있다.
</pre>

## 컴포넌트의 프롭스를 전달받아 사용할 수 있다.

```jsx
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>,
)
```

<pre>
위 코드처럼 받아온 props에 요하는 color가 없다면 유동적으로 스타일을 설정할 수 있다.
</pre>

## Source

- https://styled-components.com/
