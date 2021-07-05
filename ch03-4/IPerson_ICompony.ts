//구조화
//인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현한다. 
//이를 구조화 라고 한다.

export interface IPerson {
    name: string
    age: number
}

export interface ICompany {
    name: string
    age: number
}

//코드를 구조화하면 jack이나 apple은 물론 jane, ms와 같은 비슷한 유형의 변수를 쉽게 만들 수 있다.(코드의 기능 확장이 수월해진다.)
