//타입주석
//타입스크립트는 변수 선언문을 확장해 타입을 명시할 수 있다 이를 타입주석 이라고 한다.
//let 변수이름: 타입 [=초깃값]
//const 변수이름 : 타입 = 초깃값
//ex)
// let n: number = 1;
// let b: boolean = true //or false;
// let s: string = 'hello';
// let o: object = {};
//error)
// n = 'a';
// b = 1;
// s = false;
// o = {name: 'Jack', age:32}
//<타입 추론>
//JS와 호환성을 위해 타입 주석 부분을 생략가능하다.
//연산자 = 오른쪽 값에 따라 변수의 타입을 지정한다 이를 타입추론 이라고 한다.
var n = 1; //number
var b = true; //boolean
var s = 'hello'; //string
var o = {}; //object
// const ntype = typeof(n)
// const btype = typeof(b)
// const stype = typeof(s)
// const otype = typeof(o)
// console.log('타입확인',ntype, btype, stype, otype)
//any 타입
//타입스크립트는 자바스크립트와 호환을 위해 any라는 타입을 제공한다.
//다음 코드에서 a는 타입이 any이므로 어떤 종류의 값도 저장할 수 있다.
//ex)
var a = 0;
a = 'hello';
a = true;
a = {};
//undefined 타입
//자바스크립트에서 undefined는 값이지만 타입스크립트에서는 타입이고하고 값이기도 하다.
var u = undefined;
// u = 1 Type '1' is not assignable to type 'undefined' 오류
//템플릿 문자열
//변수에 담긴 값을 조합해 문자열ㅇ르 만들 수 있게하는 템플릿 문자열을 제공한다.
//`${변수명}`
var count = 10, message = 'Your count';
var result = message + " is " + count;
console.log(result); // Yourt count is 10
