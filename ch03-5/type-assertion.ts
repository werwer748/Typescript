import INameable from "./INameable";
let obj: object = {name: 'Jack'}

let name1 = (<INameable>obj).name;

let name2 = (obj as INameable).name;

console.log(name1,name2)

//타입 단언의 두 가지 구문은 서로 형탬나 다를뿐 내용상으로는 같다.