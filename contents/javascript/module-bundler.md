---
date: '2022-10-11'
title: '[JS]module bundler'
categories: ['Web', 'javascript', 'bundler', 'module']
summary: 'module과 bundler에 관해서...'
thumbnail: './test.png'
---

### 모듈의 필요성

개발하는 어플리케이션의 크기가 커지면서 모든 소스코드를 한개의 파일에 담는 개발방식에 한계가 왔다. 그러한 문제로 기능별 페이지별로 나눈 코드들을 각각의 파일에 담아 HTML파일에 `<script>`태그로 불러오는 방식의 개발방법을 사용했는데 해당 방식은 의존성이 있는 코드사이에 순서를 보장하기 어렵고 여러개의 파일을 로드할 때 일부 파일의 문제로 전체 스크립트를 실행 못하는 문제가 발생했다. 이러한 문제를 해결하기위해 모듈 단위 개발방식이 등장했다.

### 모듈이란?

기능별 페이지별 등으로 코드를 나누어 각각의 파일에 담은 것을 말한다.

모듈은 export와 import를 적용하여 모듈파일의 함수와 변수등을 불러올 수 있다.

#### export

```jsx
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`)
}
```

#### import

```jsx
// 📁 main.js
import { sayHi } from './sayHi.js'

alert(sayHi) // 함수
sayHi('John') // Hello, John!
```

위 코드처럼 파일의 경로를 지정하여 모듈을 로드한다.

### 번들러

번들러는 의존성이 있는 모듈 코드를 하나(또는 여러 개)의 파일로 만들어주는 도구이다. 브라우저 환경에서는 commonJS나 일부 ES6 Module로 작성된 코드는 바로 실행이 불가능하다. 모듈 코드를 분석하고 자바스크립트 모듈 스펙에 따라 새로운 코드로 가공이 필요하다. 브라우저 환경에서 잘 실행될 수 있도록 코드를 가공해주는 것이 번들러의 역할이다. 대표적인 번들러로는 RequireJS, Browserify, Rollup, Parcel 등이 있다.

## Source

- https://ko.javascript.info/modules-intro
