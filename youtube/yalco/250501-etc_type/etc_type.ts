
// null
// -> 객체가 없거나 데이터가 비어있을때
// undefinded
// -> 값이 할당되지 않거나 정의되지 않은 상태

let nullValue: null = null;
let undefindedValue: undefined = undefined;
// null / undefined인 경우 컴파일 오류
// let stringValue: string = null;
// let numberValue: number = undefined;

// tsconfig.json
// stricNullChecks: false 로 변경시 오류 안남
// let stringValue: string = null;
// let numberValue: number = undefined;

// union 타입할때 자주 사용함
// 값이 있을수도 없을수도 있는 값을 사용할때
let optionalString: string | null = "hello";
optionalString = null;

let potentiallyUndefifnedNumber: number | undefined;
console.log(potentiallyUndefifnedNumber) // undefined

// void
// -> 함수나 메소드 반환값 사용
// 반환되는 값을 받을 수 없음
// never
// -> 함수나 메소드 반환값 사용
// 반환되는 값을 받을 수 없음

// return 문이 없거나 return 뒤에 아무값이 없을 때 사용 
function printLength(text: string | null): void {
  if (text === null) {
    console.log('no text'); // no text
    // return 1;
    return;
  }
  console.log(`text length : ${text.length}`) // text length : 5
}
// -> 자바스크립트에서는 undefined 반환하지만 타입스크립트에서는 void로 명시
printLength(null)
printLength('hello')

function logMessage(message: string): void {
  console.log(message);
  return undefined; // 오류 안남
  // void == undefined
}

function logMessageNull(message: string): void {
  console.log(message);
  // return null; // 컴파일 오류
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num: number): void => {
  console.log(num * 2);
  // 2
  // 4
  // 6
  // 8
  // 10
})

// never
// => 특정오류를 던지는 용도의 함수의 반환 값 타입
function throwError(message: string): never {
  throw new Error(message);
}

// // 무한루프
// let i = 0;
// function infiniteLoop(): never {
//   while (true) {
//     i++;
//   }
// }

function handleValue(x: string | number | boolean): void {
  if (typeof x === 'string') {
    console.log('string');
  } else if (typeof x === 'number') {
    console.log('number');
  } else if (typeof x === 'boolean') {
    console.log('boolean');
  } else {
    const unreachable: never = x;
    throw new Error(`unexpected type ${x}`);
  }
}

handleValue('hoy')
handleValue(1)
handleValue(true)
// handleValue({ name: "john" })


function handleValue1(x: string | number | boolean | object): void {
  if (typeof x === 'string') {
    console.log('string');
  } else if (typeof x === 'number') {
    console.log('number');
  } else if (typeof x === 'boolean') {
    console.log('boolean');
  } else {
    const unreachable: never = x; // 컴파일 오류 
    // 컴파일 오류를 보고 typeof === object를 추가 필요한걸 확인할 수 있음
    throw new Error(`unexpected type ${x}`);
  }
}

handleValue1('hoy')
handleValue1(1)
handleValue1(true)
handleValue1({ name: "john" })


throwError("???") // return이 never라 다음거 실행이 안됨
console.log("!!!")