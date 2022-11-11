---
date: '2022-11-11'
title: '[TIL]옵셔널 체이닝 연산자, null 병합 연산자'
categories: ['옵셔널 체이닝 연산자', 'null 병합 연산자', 'javascript']
summary: '옵셔널 체이닝 연산자와 null 병합 연산자에 대하여...'
thumbnail: './optional-chaining-null-coalescing.png'
---

### 옵셔널 체이닝 연산자

ES11에서 도입된 옵셔널 체이닝 연산자 `?.`는 좌항의 피연산자가 null, undefined인 경우 undefined를 반환하고 그렇지 않으면 우향의 프로퍼티 참조를 이어간다.

```jsx
var elem = null

//elem이 null또는 undefined면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value
console.log(value) // undefined
```

### null 병합 연산자

ES11에서 도입된 null 병합 연산자 `??`는 좌항의 피연산자가 null 또는 undefined일때 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다. null병합 연산자는 기본값을 설정할 때 유용하게 쓰인다.

```jsx
//좌항의 피연산자가 null또는 undefined이면 우향의 피연산자를 반환하고
// 그렇지 않으면 좌향의 피연산자를 반환한다.
var foo = null ?? 'default string'
console.log(foo) // default string
```
