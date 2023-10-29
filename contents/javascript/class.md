---
date: '2023-10-29'
title: '[JS]클래스'
categories: ['Web', 'javascript', 'class']
summary: '클래스 돌아보기'
thumbnail: './class.png'
---

사실 나는 클래스에 대하여 자세하게 공부할 계획이 없었고, 요즘 많이들 사용한다는 ReactJS, nextJS, 들을 보면 함수형 컴포넌트를 지원하고 있고 지금까지 프로그래밍을 하면서도 클래스를 다룰일이 거의 없었기 때문이다.

하지만 리액트를 사용하는 회사중 아직 많은 곳이 함수형 컴포넌트의 이전버전인 클래스형 컴포넌트를 지원하는 버전을 사용하는 곳이 많은 것도 있고, 최근 자바스크립트를 베이스로 둔 자료구조를 공부하기 시작했는데 대부분의 예시들이 클래스를 이용하여 구현한 코드들이 많아 간단하게 읽고 넘어갔던 클래스를 다시 집고 넘어가는 계기가 되었다.

사실 자바스크립트는 클래스 기반의 객체지향 프로그램이 아닌 프로토타입 기반의 객체지향 언어이다. 하지만 여타 다른언어의 클래스 기반 객체지향 프로그래밍에 익숙한 개발자들에게 자바스크립트의 독자적인 프로토타입 기반의 객체지향 프로그램은 입문에 있어 큰 벽으로 다가왔고 이를 해결하기 위해 자바스크립트는 ES6부터 클래스를 지원하기 시작했다. 하지만 자바스크립트의 클래스는 것 모습만 클래스의 문법과 작동방식을 따르지, 실제내부 구현은 프로토타입 기반으로 작동하는 문법적 설탕이라고 볼 수 있다.

### 클래스 정의

클래스의 정의 방식은 함수의 정의 방식과 비슷하다.

일반적으로는 생성자 함수와 같은 방식으로 클래스의 이름은 파스칼 케이스를 사용하여 정의하는 것이 관행이다.

그리고 일반적인 방법은 아니지만 표현식으로 클래스를 정의 할 수 도있고 이 역시 이름을 갖을 수 있고, 갖지 않을 수도 있다.

```JavaScript
class Person {};

const Person = class {};

const Person = class MyClass {};
```

이처럼 클래스도 함수와 동일한 일급 객체로 분류된다.

### 클래스의 호이스팅

클래스는 함수로 평가된다.

클래스도 함수와 마찬가지로 코드의 평가 과정에서 코드가 실행되기 전 평가되어 함수 객체를 생성한다. 이때 해당 함수객체는 생성자 함수로서 호출할 수 있는 함수, 즉 constructor다. 생성자 함수로서 호출할 수 있는 함수는 함수 정의가 평가되어 함수 객체를 생성하는 시점에서 프로토타입 역시 같이 생성된다.

하지만 클래스는 정의 이전에 해당 클래스를 참조할 수 없다.

```JavaScript
console.log(Person);
// ReferenceError: Cannot access 'Person' before initialization

class Person {};
```

이렇게 봤을 때 클래스는 호이스팅이 발생하지 않는 것 처럼 보인다.

하지만 밑의 예시처럼 클래스도 호이스팅이 발생이 되는 것을 볼 수 있다.

```JavaScript
const Person = '';

{
	// 호이스팅이 발생하지 않는다면 ''이 출력되야 한다.
	console.log(Person);
	// ReferenceError: Cannot access 'Person' before initialization
	class Person {};
}
```

이는 클래스가 let, const 키워드로 선언한 변수처럼 호이스팅 되기 때문이다. 따라서 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에 호이스팅이 발생하지 않는 것 처럼 보이는 것이다.

### 인스턴스 생성

위 내용처럼 클래스는 생성자 함수이고 new 연산자와 함께 호출하여 인스턴스를 생성할 수 있다.

```JavaScript
class Person {};

const me = new Person();
conole.log(me) // Person {}
```

클래스는 생성자 함수와 다르게 인스턴스를 생성하는 것이 유일한 존재 이유이므로 반드시 new 연산자와 함께 호출해야 된다.

### 메서드

클래스 몸체 내에서 정의할 수 있는 메서드는 constructor, 프로토타입 메서드, 정적 메서드가 있다.

#### constructor

constructor는 인스턴스를 생성하고 초기화하기위한 메서드이며 constructor의 이름은 변경할 수 없다.

```JavaScript
class Person {
	constructor(name) {
		// 인스턴스 생성 및 초기화
		this.name = name;
	}
}
```

앞서 말했듯이 클래스는 인스턴스를 생성하기 위한 생성자 함수이다.

그러므로 클래스의 선언은 소스코드 평가 단계에서 평가되며 함수 객체를 생성하며, 함수 객체의 고유 프로퍼티를 모두 갖고있고, 함수와 동일하게 프로토타입과 연결되어 있어 자신의 스코프체인을 구성할 수 있다.

모든함수 객체가 갖고있는 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor 프로퍼니는 클래스 자신을 가리키고있다. 이로서 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 알 수 있다.

Person 클래스의 constructor 내부에서 this역시 생성자 함수 내부에 this로 추가한 프로퍼티와 동일한 방식으로 추가한 name 프로퍼티는 클래스가 생성한 인스턴스의 프로퍼티로 추가된다.

#### constructor의 특징

- constructor는 최대 한 개만 존재할 수 있으며 2개이상의 constructor를 가질 시 문법 에러가 발생한다.
- constructor는 생략할 수 있으며, 생략된 경우 빈 constructor가 암묵적으로 정의된다.
- constructor는 별도의 return문을 가질 수 없으며, 별도의 객체를 명시적으로 반환하는 경우 해당 클래스는 암묵적으로 반환해야할 인스턴스를 반환하지 못하고 명시한 객체를 반환하게 됨으로 개발자의 의도와 다르게 동작하게 된다.

#### 프로토타입 메서드

클래스에서의 프로토타입 메서드 정의는 생성자함수에서의 프로토타입 메서드 정의 방식과는 다르게 prototype 프로퍼티에 메서드를 추가하는 번거로운 작업을 하지 않아도 된다.

```JavaScript
class Person {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log(`My name is ${this.name}`);
	}
}
const me = new Person('Lee');
me.sayHi(); // My name is Lee
```

#### 정적 메서드

클래스에서 정적 메서드 정의 방식은 생성자 함수와 다르게 static 키워드를 붙여 정의할 수 있다.

```JavaScript
class Person {
	constructor(name) {
		this.name = name;
	}
	static sayHi() {
		console.log(`Hi`);
	}
}
```

이처럼 정의된 정적 메서드는 클래스가 생성한 인스턴스가 아닌 클래스에 바인딩된 메서드가 되며, 정적 메서드는 인스턴스를 생성할 필요없이 호출할 수 있고, 그와 반대로 클래스에 바인딩 된 정적 메서드는 인스턴스의 프로토타입 체인상에 존재하지 않기 때문에 생성된 인스턴스에서 정적 메서드를 호출할 수 없다.

#### 정적 메서드의 활용

대표적으로 정적 메서드를 사용하는 예시로는 표준 빌트인 객체인 Math, Number, JSON, Object, Reflect 등이 다양한 정적 메서드를 갖고있다. 이들의 정적 메서드는 애플리케이션 전역에서 사용할 수 있는 유틸리티 함수이다. 이처럼 전역에서 사용되는 함수를 클래스 또는 생성자 함수를 네임스페이스로 활용하여 정적 메서드로 모아두어 이름의 충돌 가능성을 줄이고, 관련 함수들을 구조화 시킬 수 있다.

### 클래스의 인스턴스 생성 과정

new 연산자와 함께 호출한 클래스는 생성자 함수와 마친가지로 `[[constructor]]`가 호출된다.

1. 인스턴스 생성과 this 바인딩
   new 연산자와 함께 호출된 클래스는 constructor의 내부 코드를 실행하기 전 빈 객체를 생성하고 이 빈객체는 앞서 알아봤던 클래스가 생성한 인스턴스이다.

   이때 생성된 인스턴스의 프로토토입으로 클래스의 prototype 프로퍼티가 기리키는 객체가 설정된다.

   그리고 암묵적으로 생성된 빈 객체(인스턴스)는 this에 바인딩 된다. 따라서 constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.

2. 인스턴스 초기화
   constructor 내부의 코드가 실행되면 this에 바인딩 된 인스턴스를 초기화한다. 즉 this에 바인딩 된 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 받는 값으로 인스턴스의 프로퍼티의 값을 초기화한다.
   만약 constructor 메서드가 생략된 경우 이 과정을 생락한다.
3. 인스턴스 반환
   클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.

### 프로퍼티

#### 인스턴스 프로퍼티

인스턴스 프로퍼티는 constructor 내부에 정의한다.

#### 접근자 프로퍼티

접근자 프로퍼티는 자체적 값 (`[[value]]` 내부슬롯) 를 갖지 않고 다른 데이터 프로퍼티 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티이며, 클래스에서도 접근자 프로퍼티를 사용할 수 있다.

```JavaScript
class Person {
	constructor() {
		...
	}
	get fullName() {
		...
	}

	set fullName(name) {
		...
	}
}
```

접근자 프로퍼티의 접근자함수는 getter 함수와 setter 함수로 구성돼있다.
getter 함수는 인스턴스 프로퍼티에 접간할 때 마다 프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용된다. getter는 메서드 앞에 get 키워드를 붙여 정의한다.

setter 함수는 인스턴스 프로퍼티에 값을 할당할 때마다 프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용된다. setter 역시 메서드 앞에 set 키워드를 붙여 정의한다.

이때 getter와 setter는 인스턴스 프로퍼티처럼 사용된다. 즉 접근자 함수는 호출하는 것이 아닌 프로퍼티처럼 참조하는 방식으로 접근하고, 참조 시 내부적으로 접근자 함수가 호출된다.

#### 클래스 필드 정의 제안

클래스 필드는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어다.

JavaScript에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안된다.

```JavaScript
class Person {
	name = "Lee";
	this.name = "Lee"; // syntaxError: Unexpected token '.'
}
```

클래스 필드에 초기값을 할당하지 않으면 undefined를 갖으며, 인스턴스를 생성할 때 외부의 값으로 클래스 필드를 할당해야 한다면 constructor 메서드 내부에서 클래스 필드를 초기화 해야한다. 하지만 이러한 방법 보다는 constructor 내부에서 클래스 필드를 참조하여 값을 초기화 하는 방법이 더 좋다. 이와 같은 방법으로 클래스 필드의 값을 초기화 한다면 클래스가 생성한 인스턴스에 클래스 필드에 해당하는 겂이 없다면 자동으로 추가하기 때문이다.

### 상속에 의한 클래스 확장

클래스에서의 상속은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 방식이다.

상속을 통해 클래스를 확장하려면 아래와 같이 extends 키워드를 사용하여 상속받은 클래스를 정의할 수 있다.

```JavaScript
class Animal {
	constructor(age, weight) {
		this.age = age;
		this.weight = weight;
	}
	eat() {
		return 'eat';
	}
	move() {
		return 'move';
	}
}

class Bird extends Animal {
	fly() {
		return 'fly';
	}
}
```

이와 같이 상속 관계인 두 클래스는 인스턴스의 프로토타입 체인뿐 아니라 클래스 간의 프로토타입 체인도 생성한다. 이를 통해 프로토타입 메서드와 정적 메서드 모두 상속이 가능해진다.

#### 동적 상속

extends 키워드로 클래스와 클래스의 상속뿐만 아니라 생성자 함수를 상속받아 클래스를 정의할 수 있다. 하지만 extends 키워드 앞에는 반드시 클래스가 와야한다.

```JavaScript
function Base(a) {
	this.a = a;
}

class Derived extends Base {}
```

extends 키워드 다음에는 클래스 뿐만아니라 `[[constructor]]`내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식을 사용할 수 있다. 이를 통해 동적으로 상속받을 대상을 결정할 수 있다.

#### super 키워드

super 키워드는 함수처럼 호출도 가능하고 this와 같이 식별자처럼 참조할 수 있다.

- super를 호출하면 수퍼클래스의 constructor(super-constructor)를 호출한다.
- super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

```JavaScript
class Base {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
}

class Derived extends Base {
	constructor(a, b) {
		super(a, b)
		this.c = c;
	}
}
```

new 연산자와 함께 호출된 Derived는 인수로 받은 a, b, c는 Derived의 constructor에 전달되고 super호출을 통해 a, b를 Base의 constructor에 전달한다.

```JavaScript
class Base {
	constructor(name) {
		this.name = name;
	}
	sayHi(){
		return `Hi! ${this.name}`;
	}
}

class Derived extends Base {
	sayHi() {
		return `${super.sayHi()}. how are yoe doing?`
	}
}
```

super 키워드를 참조하여 수퍼 클래스의 메서드를 호출할 수 있다.

## Source

- 이웅모, 모던 자바스크립트 Deep Dive, 위키북스, 2020
