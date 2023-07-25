---
date: '2023-05-25'
title: '[React]useEffect'
categories: ['Web', 'React', 'useEffect']
summary: 'useEffect란?'
thumbnail: './useEffect.png'
---

## useEffect?

---

<aside>
🎯 useEffect는 컴포넌트 내에서 Side effect를 실행할 수 있게 해주는 Hook이다.
즉 외부 시스템과 동기화하려는 목적으로 사용된다.

</aside>

함수가 실행되면서 함수 외부에 존재하는 값이나 상태를 변경시키는 등의 행위이다.

ex)

```jsx
let foo = 'hello'

function bar() {
  foo = 'world'
}

bar() // bar가 side effect를 발생시킴
```

React에서는 컴포넌트 내에서 fetch 를 통해 API 정보를 가져오거나 이벤트를 활용해 DOM을 직접 조작할 때 Side Effect가 발생 했다고 말한다.

### Clean UP

---

```jsx
useEffect(()=>{
	...
	return()=>{
		...
	}
})
```

useEffect의 Effect 함수에서 타이머를 시작하면 타이머를 끝내는 작업이 필요하고, 이벤트 리스너를 등록했다면 등록한 리스너를 제거해주는 작업을 해야한다.

해당 컴포넌트가 언마운트 될 때 , 다음 렌더링시 불리는 useEffect 가 실행되기 이전에 실행된다.

ex)

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('타이머 돌아가는중...')
  }, 1000)

  return () => {
    clearInterval(timer)
    console.log('타이머 종료')
  }
}, [])
```

위 예시 코드는 해당 컴포넌트가 마운트 되면 타이머는 돌아간다. 그러다 해당 컴포넌트가 언마운트 되면 clean up 함수가 실행되면서 타이머는 제거된다.

### useEffect의 첫 번째 인자

---

> `useEffect(func)`

useEffect의 첫 번째 인자로는 함수가 들어간다. 해당 함수 내에서 Side effect를 샐행시킬 수 있다.

### useEffect의 실행 조건( 종속성 배열이 없는 경우)

---

1. 컴포넌트 생성 후 처음 화면에 렌더링
2. 컴포넌트에 새로운 props가 전달되며 렌더링
3. 컴포넌트에 state가 바뀌면서 렌더링

이와 같이 매번 새롭게 컴포넌트가 렌더링 될 때 Effect Hook이 실행된다.

### useEffect의 두 번째 인자

---

> `useEffect(func, [종속성1, 종속성2, ...])`

useEffect의 두 번째 인자는 종속성 배열이다.

배열 내의 종속성의 값이 변할 때 useEffect의 첫 번째 인자인 함수가 실행된다.

### 두 번째 인자에 빈 배열이 들어갈 경우

---

이때에는 컴포넌트가 처음 생성될 때만 effect 함수가 실행된다. 보통은 처음 단 한번 외부에서 API를 통해 리소스를 받아오고 더 이상 해당 API의 호출이 필요없는 경우 사용할 수 있다.
