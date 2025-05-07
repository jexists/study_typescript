interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Joy",
  age: 30
}

// const invalidPerson1: Person = {
//   name: "alice"
//   // age 속성 없어서 에러
// }

// const invalidPerson2: Person = {
//   name: "happy",
//   age: 33,
//   job: "FrontEnd"
//   // 정의되지않은 job속성이 있어서 에러
// }

// 선택성 속성(?): 옵션 속성
// 필수가 아닌 선택적으로 사용 가능
// undefined가 될수있음
interface Product {
  name: string;
  price: number;
  description?: string;
}

const product1: Product = {
  name: "Laptop",
  price: 20000
}
const product2: Product = {
  name: "book",
  price: 5000,
  description: "note"
}

function printDesciption1(product: Product): void {
  // console.log(product.description.toUpperCase()); // 오류 undefined가 될수잇어서
  if (product.description) {
    console.log(product.description.toUpperCase());
  } else {
    console.log("no desc");
  }
}

// null 병합 연산자 (??)
// null / undefined일 경우 오른쪽 값을 대신 반환
// 중요한 값 혹은 불변값일때 사용
function printDesciption2(product: Product): void {
  console.log((product.description ?? "no desc").toUpperCase());
}

// 읽기 전용 속성
// 한번 초기화한 값을 수정 불가
interface Config {
  readonly apiKey: string;
  endpoint: string;
  timeout?: number;
}

const config: Config = {
  apiKey: "1234",
  endpoint: "https://api.ex.com"
}

config.endpoint = "hppts://api.new.com";
config.timeout = 4000;
// config.apiKey = "xya"; // 수정불가

// 읽기 전용값이 참조값(배열/객체)인 경우
// 참조값인경우에는 수정이 가능할수도 있음
interface ReadOnllyArrayDemo {
  readonly item: number[];
}

const demo: ReadOnllyArrayDemo = {
  item: [1, 2, 3]
}

demo.item.push(4)
demo.item[0] = 10
// demo.item = [4, 5] // 새로운 속성을 수정할때만 오류

interface MathOperation {
  (a: number, b: number): number;
}
const add: MathOperation = function (a, b) {
  return a + b
}
const mutiply: MathOperation = (a, b) => a * b;

console.log(add(1, 2).toFixed(2)); // 3.00
console.log(mutiply(3, 4)); // 12

const opertions: MathOperation[] = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
]

opertions.forEach((opertion) => {
  console.log(opertion(3, 2)); // 5 / 1 / 6 / 1.5
  // console.log(opertion(3, '2')); // 다른 타입인 경우 에러
})


interface Callback {
  (): void;
}
const onDone: Callback = () => {
  console.log('completed');
}

interface Button {
  label: string;
  onClick: () => void;
}

const myButton: Button = {
  label: 'Submit',
  onClick: () => {
    console.log('submit');
  }
}

// 속성과 값으로 사용할수있는 타입만 지정하는 방법
// 인덱스 시그니처: 속성의 키로 문자열 타입의 어떤 값이든 사용 가능
// 개수 제한없음 (유연하게 생성가능)
// 문자열을 키로 사용하면 새로운 속성 추가 가능
interface PhoneBook {
  [name: string]: string;
}
const phones: PhoneBook = {
  Alice: "010-2111-2232",
  Joy: "010-4881-4423",
}
phones.Karen = "010-3434-2323";
phones["Dave"] = "010-3434-3224"
phones[0] = "010-9999-2222" // 0 -> '0'

console.log(phones);
// {
//   '0': '010-9999-2222',
//   Alice: '010-2111-2232',
//   Joy: '010-4881-4423',
//   Karen: '010-3434-2323',
//   Dave: '010-3434-3224'
// }

interface Profile {
  [index: string]: string | number | boolean;
}
const profile: Profile = {
  name: "joy",
  age: 34
}
profile.married = true;
console.log(profile);
// { name: 'joy', age: 34, married: true }

// 숫자 인덱스를 사용하는 인터페이스
interface StringArray {
  [index: number]: string;
}

const vegetable: StringArray = {
  10: 'carrot',
  11: 'broccoli',
  12: 'spinach'
};
// 숫자값이 문자열로 치환된 객체

const fruits: StringArray = ['apple', 'banana', 'mango'];
// 문자열의 배열

console.log(vegetable); // { '10': 'carrot', '11': 'broccoli', '12': 'spinach' }
console.log(vegetable[10]); // carrot
console.log(fruits); // [ 'apple', 'banana', 'mango' ]
console.log(fruits[1]); // banana
// 자바스크립트의 배열은 숫자값을 키로 갖는 객체
// 배열 -> [index: number]: string; 호환됨


// 인터페이스 대안 (맵핑된 타입)
// 특정키 집합을 기반으로 동일한 구조의 타입을 자동 생성할때 사용
type AllowedKeys = 'English' | 'Math' | 'Science';

type Scores = {
  [K in AllowedKeys]: number;
}

type Grades = {
  [K in AllowedKeys]: string;
}

const scores: Scores = {
  English: 85,
  Math: 90,
  Science: 80
}

const gardes: Grades = {
  English: 'B',
  Math: 'A',
  Science: 'C'
}


// const scoresError: Scores = {
//   English: 85,
//   Math: 90,
//   // 누락한경우 오류
// }

// const gardesError: Grades = {
//   English: 'B',
//   Math: 'A',
//   // Science: 40 // 타입이 다른경우 오류
// }