//클래스 선언문
//타입스크립트는 C나 자바와 같은 객체지향 언어에서 흔히 볼 수 있는
//class, private, public, protected, implements,extend와 같은 키워드를 제공한다.
//문법적은 차이가 약간 있지만 의미는 같다.

//클래스 선언문 기본형태
// class 클래스이름 {
//     [private | protected | public] 속성이름[?]: 속성타입[...]
// }

//ex)
 class Person1 {
    name!: string;
    age?: number;
}
let jack1 : Person1 = new Person1()
jack1.name = 'Jack'; jack1.age = 32;
console.log(jack1)

//클래스의 속성은 이름앞에 붙일수 있다. 생략할 경우 public으로 간주한다.