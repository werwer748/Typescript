//잔여 연산자
//ES6와 자바스크립트는 점을 연이어 3개 사용하는 ...연산자를 제공한다.
//이 연산자는 사용되는 위치에 따라 잔여연산자 혹은 전개연산자라고 부른다.
//address 변수는 5개 속성을 가지고 있는데, 이 중 country와 city를 제외한 나머지 속성을
//별도의 detail이라는 변수에 저장하고 싶다면 detail 변수앞에 잔여 연산자를 붙인다.

let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC building' 
}

const {country, city, ...detail} = address
console.log(detail) //실행결과 country와 city를 제외한 나머지 속성이 담겨있다.