// function 키워드 함수
function greet(name: string): string {
  return `hello ${name}`
}

// 함수 표현식
const farewell = function greet(name: string): string {
  return `goodbye ${name}`
}

// 화살표 함수
const add = (a: number, b: number): number => {
  return a + b;
}

console.log(greet('world')); // hello world
console.log(farewell('world')); // goodbye world
console.log(add(1, 3)); // 4

// 선택적 매개변수: 함수 호출시 옵션 
// 필수 매개변수 뒤에만 선택적 매개변수 가능
function greet1(name?: string): string {
  // (string | undefinded)
  return name ? `Hello ${name}` : 'hi'
}

console.log(greet1('world')); // Hello world
console.log(greet1()); // hi

function add1(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b
}
const addition1 = add1(1, 2) // 3
const addition2 = add1(1, 2, 3) // 6
// const addition3 = add1(1) // 컴파일 오류

// 컴파일 오류
// function add2(a: number, b: number, c?: number): number {
//   return a + b + c;
// }

function add3(a: number, b?: number, c?: number): number {
  if (b && c) {
    return a + b + c;
  }
  return a
}

// 필수 매개변수가 앞으로 와야함
// function add4(a?: number, b: number, c?: number): number {
//   if (b && c) {
//     return a + b + c;
//   }
//   return a
// }

// 할당연산자로 없는 경우  넣기
function greeting(name: string = 'guest'): string {
  return `hello ${name}`;
}
console.log(greeting()); // hello guest
console.log(greeting('joy')); // hello joy

function increase(x: number, y: number = 1): number {
  return x + y
}
const increase1 = increase(5) // 6
const increase2 = increase(5, 2) // 7
// const increase3 = increase() // 컴파일 오류F

// 나머지 매개변수 (0개 이상의 인자를 하나의 배열로)
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40, 50)); // 150
console.log(sum()); // 0

// =======????? 확인 필요
function sumItem(item: string, ...args: number[]) {
  return `${item}: ${sum}`;
}
console.log('apple', 1, 2, 3); // apple 1 2 3
console.log('banana', 1, 2, 3, 4, 5, 6, 7); // banana 1 2 3 4 5 6 7
console.log('mango'); // mango

// // 나머지 매개변수가 앞으로 못옴 (컴파일 에러)
// function sumItemWrong(...args: number[], item: string) {
//   return `${item}: ${sum}`;
// }


// 함수 오버로딩
// 시그니처
function processInput(value: string): string;
function processInput(value: number): number;

function processInput(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.toUpperCase()
  } else {
    return value * 2
  }
}
const processed1 = processInput('hello')
const processed2 = processInput(33)
// const processed3 = processInput(true) 컴파일 오류

const myString = processed1.toLowerCase();
// 반환값이 문자열일거라고 시그니처 함수에 적어서 오류 안함


// 시그니처 없는 경우
// function processInput(value: string): string;
// function processInput(value: number): number;
function processInput1(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.toUpperCase()
  } else {
    return value * 2
  }
}
const processed11 = processInput1('hello')
const processed21 = processInput1(33)
// const myString1 = processed11.toLowerCase(); // 컴파일 오류
// myString1 -> 타입이 뭘지 몰라서 오류


function fetchData(url: string, callback: (data: string) => void): void {
  setTimeout(() => {
    const data = `data from ${url}`
    callback(data)
  }, 100);
}
fetchData('api/users', (Response) => {
  console.log(Response);
})
// data from api/users 