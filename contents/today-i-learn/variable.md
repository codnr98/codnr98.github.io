---
date: '2022-10-21'
title: '[TIL]변수 그리고 선언과 할당'
categories: ['Web', 'Javascript', '변수', '변수선언', '변수할당']
summary: '변수선언과 할당...?'
thumbnail: './tilvar.png'
---

# 변수 그리고 선언과 할당

변수

변수는 메모리에 저장된 값을 확보하기 위해 메모리공간에 붙인 이름이다.

메모리에 값이 저장되는 방식

let과 const를 배우는 과정에서 혼란이올 수 있다.

어떻게 효율적인가?

간단한 예시로 같은 값의 데이터를 여러번 사용해야할 때 변수 선언과 할당은 유용하게 쓰인다.

```jsx
// 3단
let num = 3

console.log(num * 1) // 3
console.log(num * 2) // 6
console.log(num * 3) // 9
console.log(num * 4) // 12
console.log(num * 5) // 15
console.log(num * 6) // 18
console.log(num * 7) // 21
console.log(num * 8) // 24
console.log(num * 9) // 27
```

또한 복잡한 값에 단순한 네이밍을 통해 데이터 관리를 용의하게 해주며 코드의 가독성을 높여준다.

```jsx
let radius = 3
let pi = 3.14159

console.log(pi * radius * radius)
```

변수 선언 variable declaration

변수 선언은 값을 저장할 메모리공간을 확보하고 그 공간에 변수의 이름과 메모리공간의 주소를 연결 시켜주는 것이다.

변수 선언이 되는 순간 메모리 공간 확보가 풀리지 않는 이상 누구도 메모리 공간을 사용할 수 없도록 보호해 준다.

```jsx
let score // undefined
```

위 예시처럼 변수를 선언하고 아무 값도 할당하지 않으면 자바스크립트 엔진은 암묵적으로 undefined를 할당하여 값을 초기화 한다. 이것은 자바스크립트만의 독특한 특징이라고 한다. 만약 여기서 값을 초기화 하지 않는다면 해당 메모리에는 그전에 사용하던 데이터 값이 남아 있을 수 있다. 이러한 값을 쓰레기 값 garbage value라고 한다.

값의 할당assignment

값을 할당할 때는 연산자 =을 사용한다.

여기서 중요한건 변수 선언은 소스코드가 순차적으로 실행되는 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 런타임에 실행된다. 이차이를 알면 예상치 못한 에러를 막을 수 있다.
