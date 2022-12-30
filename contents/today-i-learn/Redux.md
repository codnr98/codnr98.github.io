---
date: '2022-12-30'
title: '[TIL]Redux'
categories: ['Web', 'React', 'Redux', '상태관리']
summary: 'Redux를 사용한 상태관리...'
thumbnail: './Redux.png'
---

### Redux를 사용하는 이유

기존 리액트에서 상태관리를할 떄는 컴포넌트의 구조에 따라 데이터 흐름도 바뀌고 애플리케이션의 구조가 복잡해질수록 데이터의 흐름 또한 복잡해지고 컴포넌트 구조가 바뀌면 데이터 흐름 또한 바뀔 수 있다. 이를 계선하기 위해서 상태관리 라이브러리인 Redux를 사용한다.

### Redux의 구조

Redux의 상태관리

1. 상태가 변경되어야 하는 이벤트가 발생되면 변경될 상태에 대한 정보가 담긴 `Action` 객체가 생성된다.
2. 이 Action 객체는 `Dispatch` 함수 인자로 전달된다.
3. `Dispatch` 함수는 `Action` 객체를 `Reducer`함수로 전달해준다.
4. `Reducer` 함수는 `Action` 객체의 값을 확인하고, 그 값에 따라 전역 상태 저장소 `Store`의 상태를 변경한다.
5. 상태가 변경되면 React는 리렌더링 해준다.

### Store

Store는 Redux 앱의 state가 저장된 공간이다.

`createStore` 메서드를 사용해서 Reducer를 연결하여 Store을 생성할 수 있다.

```jsx
import { createStore } from 'redux'

const store = createStore(rootReducer)
```

### Reducer

Reducer는 Dispatch에서 전달받은 Action 객체의 type 값에 따라서 상태를 변경시키는 함수다.

```jsx
const count = 1

// Reducer를 생성할 때에는 초기 상태를 인자로 요구한다.
const counterReducer = (state = count, action) => {
  switch (action.type) {
    //action === 'INCREASE'일 경우
    case 'INCREASE':
      return state + 1

    // action === 'DECREASE'일 경우
    case 'DECREASE':
      return state - 1

    // action === 'SET_NUMBER'일 경우
    case 'SET_NUMBER':
      return action.payload

    // 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state
  }
}
// Reducer가 리턴하는 값이 새로운 상태가 된다.
```

이 떄 Reducer은 순수함수여야 한다. 외부 요인으로 인해 기대값이 아닌 엉뚱한 값으로 상태가 변경되는 일은 없어야되기 때문이다.

만약 여러개의 Reducer을 사용하는 경우 `combineReducer` 메서드를 사용하여 하나의 Reducer로 합쳐줄 수 있다.

```jsx
import { combineReducer } from 'redux'

const rootReducer = combineReducers({
  counterReducer,
  anyReducer,
})
```

### Action

어떤 액션을 취할 것인지 정해 놓는 객체다

```jsx
// payload가 필요없는 경우
{ type : 'INCREASE' }

// payload가 필요한 경우
{ type : 'SET_NUMBER', payload: 5 }
```

`type`은 해당 `Action` 객체가 어떤동작을 하는지 명시해 주는 역할을 한다. `type` 값은 대문자와 `Snake Case`로 작성한다. 여기에 필요에 따라 `payload`를 작성해 구체적인 값을 전달할 수 있다.

보통은 `Action` 을 직접 작성하기보다는 `Action` 객체를 생성하는 함수를 만들어 사용하는 경우가 많다. 이런 함수를 액션 생성자 함수(Action Creator)라고도 한다.

```jsx
// payload가 필요없는 경우
const increase = () => {
  return {
    type: 'INCREASE',
  }
}

// payload가 필요한 경우
const setNumber = num => {
  return {
    type: 'SET_NUMBER',
    payload: num,
  }
}
```

### useDispatch()

useDispatch()는 Reducer로 Action 객체를 Reducer로 전달해 주는 Dispatch 함수를 반환하는 메서드다.

```jsx
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()
// Action 객체를 직접 작성하는 경우
dispatch({ type: 'INCREASE' })
dispatch({ type: 'SET_NUMBER', payload: 5 })

// 액션 생성자(Action Creator)를 사용하는 경우
dispatch(increase())
dispatch(setNumber())
```

Action 객체를 전달받은 Dispatch 함수는 Reducer를 호출한다.

### useSelector()

`useSelector()` 는 컴포넌트와 state를 연결하여 Redux의 state에 접근할 수 있도록 해준다.

```jsx
// Redux Hooks 메서드는 'redux'가 아니라 'react-redux'에서 불러올 수 있다.
import { useSelector } from 'react-redux'
// useSelector()의 콜백 인자에 Store에 저장된 모든 state가 담긴다.
const counter = useSelector(state => state)
console.log(counter) // 1
```
