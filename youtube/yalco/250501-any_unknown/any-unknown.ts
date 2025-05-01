let any; // any

let anyValue: any = 10; // number
anyValue = 'hello'; // string
anyValue = true; // boolean
anyValue = [1, 2, 3]; // array
anyValue = { name: 'John' }; // object

// any 타입
// 해당 변수에 어떤 값을 넣어도 컴파일 오류 없음
// any 사용시 컴파일 단계에서 오류 알수없음
// 외부 라이브러리 사용 / 네트워크 데이터 등 데이터를 알수 없는 경우
// 모든 메소드 허용 -> 타입 다른경우 런타임 오류

let anyString: any = 123;
let number = 123;
let string = 'string';

// console.log(anyString.toUpperCase()); // 런타임 오류
// TypeError: anyString.toUpperCase is not a function 
// console.log(number.toUpperCase()); // 컴파일 오류

// console.log(anyString.nonExistentMethod()); // 런타임 오류
// TypeError: anyString.nonExistentMethod is not a function
// console.log(string.nonExistentMethod()); // 컴파일 오류

let anyVar: any = 10;
let unknownVar: unknown = 10;

let anyNumber: number = anyVar;
// anyVar.toFix(2); // 런타임 오류

// let unknownNumber: number = unknownVar;
// unknownVar.toFix(2); // 컴파일 오류

// unknown 타입
// 타입을 모르는 값
// 모든 메소드 허용x -> 타입이 맞아도 컴파일 오류
// unknown사용시 타입가드 필수
// 사용시 타입 검사 필수 


function processValue(val: unknown): string {
  // console.log(val.toUpperCase()) // 타입가드 없으면 컴파일 오류
  if (typeof val == 'string') {
    console.log(val.toUpperCase()) // HELLO
    return val.toUpperCase();
  }
  // if (typeof val == 'string') {
  //   return val.toFixed(2)
  // }
  if (typeof val == 'number') {
    return val.toFixed(2)
  }
  return String(val)
}

console.log(processValue('hello')) // HELLO
console.log(processValue(42)) // 42.00
console.log(processValue(true)) // true

let unknownValue: unknown = "hello"

// 타입 정의
let stringLenth = (unknownValue as string).length

// 타입 가드가 더 안전
if (typeof unknownValue === 'string') {
  let length = unknownValue.length;
}

// 객체일때
function processUserData(user: unknown): string {
  // 객체인지 null인지 확인
  if (typeof user === 'object' && user !== null) {
    // name 속성이 있는지 확인 후 name이 문자열인지 확인
    if ('name' in user && typeof (user as any).name === 'string') {
      return (user as any).name.toUpperCase();
    }
  }
  return 'Invalid user data'
}

console.log(processUserData({ name: 'joy' })) // JOY
console.log(processUserData({ name: 123 })) // Invalid user data
console.log(processUserData('joy')) // Invalid user data