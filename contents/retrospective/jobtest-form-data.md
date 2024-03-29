---
date: '2023-08-09'
title: '[Retrospective]기업과제를 하며 생긴 Form Data 관리 문제'
categories: ['기업과제', '회고', 'Form']
summary: 'Form Data 관리 기능을 구현하면서 생긴 문제.'
thumbnail: './jobtest-form-data.png'
---

# FormData 관리

이번에 기업과제를 하면서 기본 text를 담는 input 뿐만 아니라 날짜를 담는 input 그리고 radio button 과 checkbox 등 총 7가지 종류의 데이터가 담긴 form 을 구현하는 일이 생겼다.

### 내가 구현한 FormData 관리 로직

- form 에는 7가지 종류의 데이터를 사용자로 부터 받아온다.
- 모든 form data를 받아오는 state를 생성
- 다음 각각의 데이터를 담는 state를 만들어 data의 state 를 따로 관리함
  이유 : 만약 모든 데이터를 하나의 객체에 담아 state로 관리한다면 각각의 데이터를 변경할 때 마다 데이터의 불변성을 지키기 위해 모든 데이터를 갈아 끼워야하는 번거로움이 발생한다.
  그리하여 모든 form data를 담는 state를 만들어 두고 각각의 데이터에 대한 state를 만들어 상용자가 변경할 때는 각각의 state를 이용하여 데이터의 값을 실시간으로 관리하고 수정이 끝난 후 submit을 할 때에 전에 만들어 둔 form data에 각각의 state의 값을 담아 한번에 보내는 방식으로 구현하였다.
- 사용자가 submit 할 때에 전에 만들어 둔 모든 form data를 담는 state에 각각의 state 값을 담아 최종적으로 server에 보낸다.

### 위 방법의 문제

하지만 위 방법은 각 input 마다 state 선언과 이를 다루기위한 핸들링 함수들 그리고 여기서 유효성 검증 기능이 추가된다면 코드는 더욱더 길어질 것이다.

코드의 길이 뿐만 아니라, 각각의 state 값들이 변할 때 마다 해당 컴포넌트에서 리랜더링이 발상할 것이고 이는 수없는 불필요한 렌더링이 발생할 것이다.

### react-hook-form 라이브러리 사용

- 협업하기 좋은 코드

  위와 같은 유명한 라이브러리를 사용하면 기존의 개발하던 사람이 아닌 새로운 개발자가 해당코드를 유지보수 하더라도 큰 어려움 없이 할 수 있을 것이다.

- state 최소화

  해당 라이브러리는 비제어 컴포넌트 컨셉이라 기존 폼 보다 state를 줄일 수 있다.
