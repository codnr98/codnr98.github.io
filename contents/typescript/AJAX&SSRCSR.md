---
date: '2023-07-28'
title: '[TypeScript]TypeScript?'
categories: ['Web', 'TypeScript', '타입스크립트']
summary: 'TypeScript는 무엇이고 왜 사용하는가?'
thumbnail: './typescript.png'
---

# TypeScript

### JavaScript는 동적 타이핑 언어

자바스크립트는 동적 타이핑 언어이다. 즉 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론 type inference)된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.

이러한 이유 때문에 아래와 같이 예상치 못한 에러들이 발생하고 이 문제는 프로젝트의 규모가 커질수록 개발자가 관리하기 힘든 수준에 도달한다.

```jsx
if ('' == 0) {
  // ture
}
if (1 < x < 3) {
  // x에 어떤 값이 들어가든 ture다.
}
```

JavaScript는 존재하지 않는 프로퍼티의 접근을 허용한다.

```jsx
const obj = { width: 10, height: 15 }

const area = obj.width * obj.heigth

console.log(area) // NaN
```

### TypeScript?

타입스크립트는 정적 타입 검사자다. 정적 타입 검사는 프로그램을 실행시키지 않고 코드의 오류를 검사하는 것을 말한다.

정적 타입 검사자인 타입스크립트는 프로그램을 실행시키기 전 값의 종류를 기반으로 프로그램의 오류를 찾아 낸다.

타입스크립트의 컴파일러가 코드 검사를 마치면 타입을 삭제해서 결과적으로 컴파일된 코드를 만든다. 즉 코드가 컴파일 되서 결과로 나온 JS코드에는 type 정보가 없다.

### TypeScript의 장점

1. 정적 타입 지원

   명시적인 정적 타입 지정을 통해 개발자의 의도를 명확하게 코드로 나타낼 수 있다. 이는 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅을 쉽게 한다.

2. 강력한 객체지향 프로그래밍 지원

   인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍 지원은 큰 프로젝트의 코드 기반을 쉽게 구성할 수 있게 해준다.

> reference
> https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
