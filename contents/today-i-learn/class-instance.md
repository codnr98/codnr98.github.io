---
date: '2022-11-18'
title: '[TIL]클래스와 인스턴스'
categories: ['Web', 'Javascript', 'class', 'instance', 'constructor']
summary: '클래스와 인스턴스에 대하여...'
thumbnail: './class-instance.png'
---

### 클래스와 인스턴스

예를 들어 학생의 정보를 담는 객체를 만드려 한다. 학생의 기본정보인 이름, 전공, 학번, 학년 기본적으로 담는 객체 틀을 만드려 하는데 이때 필요한 것이 클래스이다.

그리고 만든 클래스(학생 정보를 담는 객체 틀)를 통해 추가한 여러 학생들의 정보가 담긴 객체를 인스턴스라고 볼 수 있다.

ES5에는 생성자 함수를 통해 객체지향 프로그래밍을 해왔지만 ES6부터는 class라는 키워드를 이용해서 정의할 수 있다.

```jsx
// Class의 이름은 일반적인 함수들과 구분하기 위해 앞글자를 대문자로 작성한다.
class Student {
  constructor(name, major, id) {
    this.name
    this.major
    this.id
  }
}
// 인스턴스를 만들때는 new키워드를 사용해 만든다.
let student1 = new Student()
student1.name = 'codnr'
student1.major = '컴퓨터공학'
student1.id = '12345'

let student2 = new Student()
student2.name = 'alswo'
student2.major = '경영학'
student2.id = '12346'

console.log(student1, student2)
// Student { name: 'codnr', major: '컴퓨터공학', id: '12345' }
// Student { name: 'alswo', major: '경영학', id: '12346' }
```

생성자 함수는 return값을 만들지 않는다.

- constructor
  - 모델의 청사진을 만들 때 쓰는 원형 객체(original form)이다.
- prototype
  - 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다.
- this
  - 함수가 실행될 때 해당 scope마다 생성되는 고유 실행 context.
  - new키워드로 인스턴스가 생성됐을때 해당 인스턴스가 바로 this의 값이 된다.
