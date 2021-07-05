//인터페이스 구현
//타입스크립트 클래스는 인터페이스를 구현할 수 있다. 이 때는 다음처럼 implements키워드를 사용한다.
//class 클래스명 implements 인터페이스명 {}

//인터페이스는 이러이러한 속성이 있어야 한다는 규약에 불과할 뿐 해당 속성을 만들지는 않는다.
//따라서 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 한다.

interface IPerson4 {
    name: string;
    age?: number;
}

// class Person4 implements IPerson4 {
//     name: string;
//     age: number;
// }

class Person4 implements IPerson4 {
    constructor(public name: string, public age?: number){}
}
let jack4: IPerson4 = new Person4('Jack',32)

console.log(jack4)