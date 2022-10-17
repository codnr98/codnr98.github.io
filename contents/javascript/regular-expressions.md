---
date: '2022-10-17'
title: '[JS]Regular expressions'
categories: ['Web', 'javascript', 'Regular expressions']
summary: 'Regular expressions에 관해서...'
thumbnail: './test.png'
---

## Regular expressions

정규표현식, 또는 정규식은 문자열에서 **특정 문자 조합을 찾기위한 패턴이다.**

JS에서는 정규표현식도 객체로서, `RegExp`의 `exec()`와 `test()` 메서드를 사용 할 수 있고 `String`의 `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, `split()` 등의 메서드와도 함께 사용할 수 있다.

### 정규 표현식은 두 가지 방법으로 만들 수 있다.

1. 정규 표현식 리터럴.

```jsx
const re = /ab+c/
```

정규 표현식 리터럴은 스크립트를 불러올 때 컴파일된다. 바뀔 일이 없는 패턴의 경우 리터럴을 사용하면 성능을 향상 시킬 수 있다.

2. RegExp객체의 생성자 호출

```jsx
const re = new RegExp('ab+c')
```

생성자 함수를 사용하면 정규 표현식이 런타임에 컴파일된다. 바뀔 수 있는 패턴이나, 사용자 입력 등 외부 출처에서 가져오는 패턴의 경우 이렇게 사용한다.

### 정규 표현식 패턴 작성하기

정규 표현식 패턴은 단순히 `/abc/` 처럼 단순한 문자로 구성하거나, `/ab+c/`와 `/Chapter (/d+)\.\d\*/`처럼 단순한 문자와 특수 문자의 조합으로 구성할 수 있다. 여기서 `(/d+)`는 정규 표현식에서 기억 장치처럼 쓰여서, 괄호의 안쪽 패턴과 일치한 부분을 나중에 사용할 수 있도록 기억한다.

### 단순 패턴 사용하기

단순 패턴은 문자열을 있는 그대로 탐색할 때 사용된다. 예를 들어 `/abc/` 패턴은 문자열에서 정확한 순서로 “abc”라는 문자의 조합이 나타나는 부분과 일치한다. 그러므로 이 패턴은 `“Hi, do you know your abc’ s?`와 `"The latest airplane designs evolved from slabcraft.”` 두 문자열에서 일치에 성공하고, 일치하는 부분은 “abc”일 것이다. 반면 `“Grad crab”`에서는 일치하지 안는데, 이 문자열은 부분문자열로. “ab c”를 포함하고 있지만 정확하게 “abc”를 포함하지 않기 때문이다.

## Source

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
