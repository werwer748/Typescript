//전개 연산자
//두 객체 앞에 모두 ...이 붙었다.
//하지만 이 코드는 비구조화 할당문이 아니다.
//...연산자가 비구조화 할당문이 아닌 곳에서 사용될 때 이를 전개 연산자 라고 한다.

let coord = {...{x:0},...{y:0}}
// console.log(coord)

//전개 연산자는 의미 그대로 객체의 속성을 모두 전개해 새로운 객체로 만들어준다.
//part1, part2, part3 세 개의 객체가 선언되었다.
//만일, 이를 통합한 새로운 객체를 만들고 싶다면 전개연산자를 사용한다.

let part1 = {name:'jane'}, part2 = {age:22}, part3={city:'Seoul', country:'Kr'};
let merge = {...part1,...part2,...part3}
console.log(merge)