//static 속성
//타입스크립트 클래스는 정적인 속성을 가질 수 있다.
// class 클래스이름 {
//     static 정적 송성 이름: 속성타입
// }

//A는 initValue라는 정적 속성을 가진다.
//정적 속성은 클래스명.정적 속성명 형태로 점 표기범을 사용해 값을 얻거나 설정합니다.

class A {
    static initValue = 1
}

let initVal = A.initValue