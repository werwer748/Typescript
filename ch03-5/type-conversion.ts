// 타입이 있는 언어들은 특정 타입의 변숫값을 다른 타입의 값으로 변환할 수 있는 기능을 제공한다.
// 이를 타입변환이라고 한다.

let Person: object = {name:"Jack", age: 32};
// Person.name 오류

//해결
(<{name: string}>Person).name