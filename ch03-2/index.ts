//Interface 선언문
//객체의 타입을 정의하는 것이 목적 {}로 속성의 이름과 타입을 나열하는 형태로 사용한다.
//ex) 
//interface 인터페이스명 {
// 속성이름[?]: 속성 타입[,...]
// }
interface IPerson {
    name: string //,대신 ; 혹은 단순 줄바꿈만해도 된다.
    age: number 
    //선택속성 구문
    //어떤 속성은 있어도되고 없어도 되는 형태로 만들고 싶을때 선택속성을 사용한다.
    //속성 이름 뒤에 물음표 기호를 붙여서 만든다.
    etc?: boolean
}
//따라서

let good : IPerson = {name: 'Jack',age: 32} //오류가 없다
let good2: IPerson = {name: 'Jack',age: 32, etc:true}

// let bad1: IPerson = {name: 'Jack'} //age속성이 없어서 오류
// let bad2: IPerson = {age: 32} //name속성이 없어서 오류
// let bad3: IPerson = {} //name과 age 속성이 없으므로 오류
// let bad4: IPerson = {name: 'Jack',age: 32, etc:true} //etc속성이 있어서 오류


//익명 인터페이스
//interface 키워드를 사용하지않고 이름도 없는 인터페이스를 만들수 있다.
//이를 익명 인터페이스 라고 한다.

let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age:32, etc:true}
//주로 함수를 구현할때 사용된다
//ex)
function printMe(me:{name: string, age: number, etc?:boolean}){
    console.log(
        me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`  
    )
}
printMe(ai)