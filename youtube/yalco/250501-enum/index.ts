const USER_ROLE_ADMIN = 0;
const USER_ROLE_MANAGER = 1;
const USER_ROLE_EMPLIYEE = 2;
const USER_ROLE_GUEST = 3;

function checkUserAccess(userRole: number): boolean {
  if (userRole === USER_ROLE_ADMIN || userRole === USER_ROLE_MANAGER) {
    return true;
  }
  return false;
}

console.log(checkUserAccess(USER_ROLE_ADMIN)) // true
console.log(checkUserAccess(2)) // false
console.log(checkUserAccess(99)) // false

// 열거형
enum UserRole {
  Admin = 0,
  Manager = 1,
  Employee = 2,
  Guest = 3
}
function checkUserAccessEnum(userRole: UserRole): boolean {
  if (userRole == UserRole.Admin || userRole === UserRole.Manager) {
    return true
  }
  return false
}

console.log(checkUserAccessEnum(USER_ROLE_ADMIN)) // true
console.log(checkUserAccessEnum(2)) // false
// console.log(checkUserAccessEnum(99)) // 컴파일 에러

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); //3

console.log(Direction[0]); // Up
console.log(Direction[1]); // Down

enum HttpStatus {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500
}

const status1: HttpStatus = HttpStatus.Ok
const status2: HttpStatus = 201
// const status3: HttpStatus = 203 // 컴파일 에러 (포함되지않은 숫자)
console.log(status1); // 200
console.log(status2); // 201

// 값이 자동으로 +1
enum Priority {
  Low = 5,
  Medium,
  High = 10,
  Critical,
}
console.log(Priority.Low); // 5
console.log(Priority.Medium); // 6
console.log(Priority.High); // 10
console.log(Priority.Critical); // 11

// 같은 숫자도 가능하지만 사용안함
enum noError {
  Hi = 5,
  Hello = 5
}
console.log(noError.Hi); // 5
console.log(noError.Hello); // 5

enum Theme {
  Light = "light-theme",
  Dark = "dark-theme",
  System = "system-theme",
}

function applySystemTheme(theme: Theme): void {
  const className = theme;
  console.log(className);
}

applySystemTheme(Theme.Dark) // dark-theme
// 숫자는 열거형의 값 대신 가능하지만 문자열은 불가능
// applySystemTheme('light-theme') // 컴파일 에러 (문자열은 불가능)
console.log(Theme.Dark); // dark-theme
console.log(Theme.System); // system-theme
console.log(Theme.Light); // light-theme

// 문자열 숫자 같이 사용가능 -> 권장X
enum ApiResponse {
  Success = 200,
  SuccessMessage = "sucessful"
}

enum Direction1 {
  Up,
  Down,
  Left,
  Right
}
const dir = Direction.Up;
const dirUp = Direction1[0]

// const 최적화에 좋음
const enum FastDirection {
  Up,
  Down,
  Left,
  Right
}
const fastDir = FastDirection.Up;
// const fastUp = FastDirection[0] // const사용시 불가

// 값과 이름 관리 / 복잡한 로직
enum CartSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

function displaySuitEnum(suit: CartSuit): string {
  switch (suit) {
    case CartSuit.Clubs: return "C";
    case CartSuit.Diamonds: return "D";
    case CartSuit.Hearts: return "H";
    case CartSuit.Spades: return "S";
  }
}

console.log(displaySuitEnum(CartSuit.Hearts)); // H

// 성능 최적화 / 객체 남기기 싫을때 / 고정값
type CardSuitUnion = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';
function displaySuitUnion(suit: CardSuitUnion): string {
  switch (suit) {
    case 'Clubs': return "C";
    case 'Diamonds': return "D";
    case 'Hearts': return "H";
    case 'Spades': return "S";
  }
}

console.log(displaySuitUnion('Hearts')); // H
// console.log(displaySuitUnion('hearts')); // 컴파일 오류F