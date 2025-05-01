let numbers: number[] = [1, 2, 3, 4, 5];
// let numbers1: number[] = [1, 2, 3, 4, '5']; // 컴파일 오류

// 제네릭 형식
let fruits: Array<string> = ['apple', 'banana', 'orange'];

let scores: number[] = [];
scores.push(95)
scores.push(88)
// scores.push('A+') // 컴파일 오류

let colors = ['red', 'blue']
// colors.push(1) // 컴파일 오류

console.log(numbers[0], fruits[0]); // 1 apple

// 2차열 배열
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // [7, 8, 9, true]
]
console.log(matrix[0][1]); // 2

// 3차열 배열
let cube: number[][][] = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
  // [[5, 6], [7, 8, '1']],
]
console.log(cube[1][0][1]); // 6

const names: string[] = ['alice', 'joy']

const nameLenths: number[] = names.map(name => name.length);
// const nameLenthsErr: number[] = names.map(name => name.toFixed(2)); // 컴파일 오류
console.log(nameLenths); // [ 5, 3 ]

const longNames: string[] = names.filter(name => name.length > 4);
console.log(longNames); // [ 'alice' ]

const longNames1: string[] = names.filter(name => name.length > 8);
console.log(longNames1); // [  ]

const foundName: string | undefined = names.find(name => name.startsWith('B'))
console.log(foundName); // undefined

// const foundName1: string = names.find(name => name.startsWith('B')) // 컴파일 오류

const originalArray: number[] = [1, 2, 3, 4, 5]
originalArray[0] = 10

// 읽기 전용 배열
// 수정 불가
const readOnlyNumbers: ReadonlyArray<number> = originalArray; // 제너릭 타입
const readOnlyScores: readonly number[] = [98, 99, 85] // readonly 연산자

console.log(readOnlyNumbers); // [ 10, 2, 3, 4, 5 ]
// readOnlyNumbers[0] = 100; // 컴파일 오류
// readOnlyScores.push(100); // 컴파일 오류

// 수정은 불가능하지만 수정가능한 새 배열로 복사 가능
const newArray = [...readOnlyNumbers, 6]
console.log(newArray); // [ 10, 2, 3, 4, 5, 6 ]
newArray[0] = 0;
newArray.push(4)

console.log(newArray);
// [
//   0, 2, 3, 4,
//   5, 6, 4
// ]

// ========
// 튜플
// 배열과 비슷
// 각 요소와 타입과 순서 정해짐

let person: [string, number] = ['joy', 30];
console.log(person[0]); // joy
console.log(person[1]); // 30

// 다른 타입이나 숫자 초과인 경우
// person = [30, 'joy'] // 컴파일 오류
// person = ['joy', 30, true] // 컴파일 오류

// 구조분해할당
const [firstName, age] = person;
console.log(firstName); // joy
console.log(age); // 30


// 선택성 요소 가능
type OptionalTuple = [string, number, boolean?];
const complete: OptionalTuple = ['joy', 24, true]
const partial: OptionalTuple = ['joy', 24]


// 튜플 함수 반환값과 제네릭 타입으로 사용
function getUserInfo(): [string, number, boolean] {
  return ['happy', 34, false]
}
const [username, userAge, isAdmin] = getUserInfo();

console.log(`username: ${username}, age ${age}, admin ${isAdmin}`);
// username: happy, age 30, admin false

type keyValuePair<K, V> = [K, V];
const entries: keyValuePair<string, number>[] = [
  ['apple', 20],
  ['banana', 30],
  ['mango', 40],
]

// 타입 추론
const inferredArray = [1, 'hello']
// (string | number)[]
inferredArray[0] = 'hi'
inferredArray.push(3)
inferredArray.push('world')
// inferredArray.push(true) // 컴파일 오류

const inferredTuple = [1, 'hello'] as const; // 다른값이 들어올 수 없음 (수정불가)
// readonly [1, 'hello']

// inferredTuple[0] = 2;
// inferredTuple[1] = 'world';

let explicitTuple: [number, string] = [1, 'hello']
explicitTuple = [2, 'world']
// explicitTuple[0] = 'hi'
explicitTuple[0] = 5

// 객체 ===

const person1: { name: string; age: number } = {
  name: "joy",
  age: 24
}
person1.name = 'happy'
// person1.age = '43' // 컴파일 오류
// person.isAdmin = true // 컴파일 오류
// const personWrong: { name: string; age: number } = {
//   name: "joy",
//   age: '24' // 컴파일 오류 (타입)
// }
// const personWrong1: { name: string; age: number } = {
//   name: "joy"
//   // 컴파일 오류 (age 없음)
// }
// const personWrong2: { name: string; age: number } = {
//   name: "joy",
//   age: 24
//   isAdmin: true // 컴파일 오류 (명시안된 속성)
// }


// interface
interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

const adminUser: User = {
  id: 0,
  username: 'admin',
  isAdmin: true
}
// const user1: User = {
//   id: 1,
//   username: 'hehe'
//   // 컴파일 오류 (isAdmin 누락 )
// }
// const user2: User = {
//   id: "1", // 컴파일 오류 (타입 다름)
//   username: "admin",
//   isAdmin: false
// }