//추상 클래스
//타입스크립트는 abstract 키워드를 사용해 추상 클래스를 만들 수 있다.
//추상클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 한다.

// abstract class 클래스이름 {
//     abstract 속성이름: 속성타입
//     abstract 메서드이름(){}
// }

//AbstractPerson5는 name 속성앞에 abstract가 붙어있으므로 new 연산자를 적용해 객체를 만들 수 없다.

abstract class AbstractPerson5 {
    abstract name: string;
    constructor(public age?: number) {}
}

// let jack5 = new AbstractPerson5('Jack',32) 오류

//클래스의 상속
//객체지향 언어는 부모클래스를 상속받는 상속클래스를 만들수 있는데,
//타입스크립트는 다음처럼 extends 키워드를 사용해 상속 클래스를 만든다.
//class 상속클래스 extends 부모클래서 {...}

//다음 클래스는 Abstract5 추상 클래스를 상속해 Abstractperson5가 구현한 age를 얻고,
//Abstractperson5를 상속받는 클래스가 구현해야 할 name 속성을 구현한다.
//참고로 타입스크립트는 부모클래스의 생성자를 super 키워드로 호출할 수 있다.

class Person5 extends AbstractPerson5 {
    constructor(
        public name: string,
        public age?: number
    ){ super(age) }
}

let jack5: Person5 = new Person5('Jack',32)
console.log(jack5)