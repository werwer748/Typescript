//생성자
//타입스크립트 클래스는 constructor라는 메서드를 포함하는데 이를 생성자 라고 한다.
class Person2 {
    constructor(public name:string, public age?: number){} //이런 형태로 클래스의 속성을 선언할 수 있다.
}
let jack2: Person2 = new Person2('Jack',32)
console.log(jack2) //Person1과 똑같이 작동한다.