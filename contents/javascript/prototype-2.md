---
date: '2023-09-24'
title: '[JS]Prototype(2)'
categories: ['Web', 'javascript', 'Prototype']
summary: '프로토타입 2'
thumbnail: './prototype-2.png'
---

## 함수 객체의 prototype 프로퍼티

함수 객체만 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

하지만 생성자 함수로서 호출할 수 없는 non-constructor 인 화살표 함수, 메서드 축약 표현을 통해 정의 한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입을 생성하지 않는다.

```JavaScript
// 화살표 함수
const Person = name => {
	this.name = name;
};

// 메서드 축약 표현으로 정의된 메서드
const obj = {
	foo() {}
};
```

그리고 일반함수 (함수 선언문 함수 표현식) 은 prototype 객체를 가지고 있지만 프로토타입 객체를 생성하지 않아 아무런 의미가 없다.

#### 프로토타입의 constructor 프로퍼티와 생성자 함수

모든 프로토타입은 constructor 프로퍼티를 갖는다. constructor 는 prototype 프러퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다. 이 연결은 해당 객체의 생성자 함수를 가리킨다.

```JavaScript
function Person(name) {
	this.name = name;
};

const me = new Person('Lee');

me.constructor === Person; // true
```

me 객체에는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Person.prototype의 constructor 프로퍼티를 상속받아 사용할 수 있다.

#### 빌트인 생성자 함수와 프로토타입 생성 시점

모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성 되고, 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩 된다.

이처럼 객체가 생성되기 전에 생성자 함수와 프로토타입은 이미 객체화되어 존재하고, 이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 `[[Prototype]]` 내부 슬롯에 할당된다. 이러한 과정을 통해 생성된 객체는 프로토타입을 상속받게 된다.

## 프로토타입 체인

프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘으로 객체의 프로퍼티와 메서드에 접근할 때 해당 객체에 접근하려는 프로퍼티나 메서드가 없다면 `[[Prototype]]` 내부 슬롯의 참조를 따라 상위 프로토타입의 프로퍼티를 순차적으로 검색한다.

프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. 따라서 모든 객체는 Object.prototype을 상속 받는다.

#### 프로토타입 체인의 종점

Object.prototype을 프로토타입 체인의 종점이라 부르고 Object.prototype의 프로토타입 즉 `[[Prototype]]` 내부 슬롯의 값은 null이다.

#### 프로토타입 체인, 스코프 체인

프로토타입 체인은 프로퍼티 검색을 위한 메커니즘이고, 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다.

```JavaScript
obj.hasOwnProperty('name');
```

위 예시에서 obj라는 식별자를 찾기위해 스코프체인에서 검색한다. obj 식별자를 검색한 다음, obj 객체의 프로토타입 체인에서 hasOwnProperty 메서드를 검색한다.

이처럼 스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아닌 서로 협력하여 식별자와 프로퍼티를 검색하는데 사용된다.

### 오버라이딩과 프로퍼티 섀도잉

```JavaScript
const Person = (function () {
	function Person(name) {
		this.name = name;
	}
	// 프로토타입 메서드 생성
	Person.prototype.sayHello = function () {
		console.log(`Hi My name is ${this.name}`);
	};

	return Person;
});

const me = new Person('Lee');
// 프로토타입 메서드와 같은 이름으로 인스턴스 프로퍼티 생성
me.sayHello = function () {
	console.log(`Hey My name is ${this.name}`)
};

me.sayHello();
// => Hey My name is Lee
```

위 예시처럼 생성자 함수로 객체를 생성한다음, 인스턴스 메서드를 기존에 있던 프로토타입 프로퍼티와 같은이름으로 생성했고, 최종적으로 `me.sayHello();`를 호츨했을 때 기존에 있던 프로토타입 메서드가 아닌 인스턴스 메서드가 호출된다.

이처럼 기존에 있던 프로토타입 메서드와 같은 이름으로 인스턴스 메서드를 생성하게 되면 인스턴스 메서드는 프로토타입 메서드를 오버라이딩 하게 되고 프로토타입 메서드는 가려지게 된다. 이를 프로퍼티 섀도잉 현상이라 한다.

하지만 인스턴스에서 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다. 다시말해 하위 객체를 통해 get 액세스는 허용되지만 set 액세스는 허용되지 않는다.

프로토타입 프로퍼티를 삭제하기 위해선 프로토타입에 직접 접근하여 해결해야 된다.

## Source

- 이웅모, 모던 자바스크립트 Deep Dive, 위키북스, 2020
