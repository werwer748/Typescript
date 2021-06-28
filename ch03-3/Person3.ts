class Person3 {
    name: string;
    age?: number;
    constructor(name: string, age?: number){
        this.name = name; this.age = age
    } 
}
let jack3: Person3 = new Person3('Jack',32)
console.log(jack3)

//타입스크립트는 생성자의 매개변수에 public과 같은 접근제한자를 붙이면 
//해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다.
//즉, Person2클래스는 다음 Person3클래스처럼 장황하게 구현된 것을 함축해서 구현한 것이다.