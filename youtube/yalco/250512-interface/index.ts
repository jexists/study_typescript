// 부모
interface Animal {
  name: string;
}

// 상속받음 (확장) => 자식
interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "boy",
  breed: "mong"
}


interface CanRun {
  run(): void;
}

interface CanBark {
  bark(): void;
}
// 다중 상속 (mixin 스타일)
interface Dog1 extends CanRun, CanBark { }

const myDog1: Dog1 = {
  run() {
    console.log("running");
  },
  bark() {
    console.log("woof");
  }
}

interface InterfaceA {
  value: string;
}

interface InterfaceB {
  value: number;
}
// 다중상속 주의점 -> 같은 이름으로 타입이 다름
// interface InterfaceC extends InterfaceA, InterfaceB {}

// 해결방안1 : 속성이름 변경
interface InterfaceA1 {
  valueA: string;
}

interface InterfaceB1 {
  valueB: number;
}
interface InterfaceC1 extends InterfaceA1, InterfaceB1 { }


// 해결방안2 : union 타입 사용
interface InterfaceA2 {
  value: string | number;
}

interface InterfaceB2 {
  value: string | number;
}
interface InterfaceC2 extends InterfaceA2, InterfaceB2 { }


interface ContactInfo {
  phone: string;
  email: string
}

interface Employee {
  name: string;
  contact: ContactInfo;
}
// 중첩된 인터페이스
const dev: Employee = {
  name: "joy",
  contact: {
    phone: "010-111-2222",
    email: "em@naver.com"
  }
}

// 인터페이스 병합
interface ApiResponse {
  data: any;
  status: number;
}
// 같은 이름의 인터페이스 두번 선언
interface ApiResponse {
  headers: { [key: string]: string };
  timestamp: Date;
}
// 동일한 이름의 인터페이스가 여러번 선언되면 자동으로 병합
const response: ApiResponse = {
  data: { name: "project", price: 100 },
  status: 200,
  headers: { "Content-Type": "application/json" },
  timestamp: new Date()
}

// 클레스 구조 정의
interface Animal3 {
  name: string;
  makeSound(): void;
}

class Dog3 implements Animal3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name}: wof!`);
  }
}

const myDog3: Animal3 = new Dog3("Bubby")
myDog3.makeSound()

interface Flyer {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

class Duck implements Flyer, Swimmer {
  fly(): void {
    console.log('flying');
  }
  swim(): void {
    console.log('swiming');
  }
}
// swim없어서 에러
// class Duck2 implements Flyer, Swimmer {
//   fly(): void {
//     console.log('flying');
//   }
// }

// 초과속성 검사 ====
interface User {
  id: number;
  name: string;
}

// age가 정의가 안되서 컴파일 오류
const user1: User = {
  id: 1,
  name: "jjoy",
  // age: 24 // Excess Property 
}

const temp = {
  id: 2,
  name: "dave",
  age: 35 // 정의안된 초과 속성
}
// 오류 안생김 (타입추론해서 대입)
const user2: User = temp

// 타입단언 우회 (검사 생략 / 안전성X)
const user3 = {
  id: 4,
  name: "karen",
  age: 49
} as User

interface Person {
  name: string;
  age: number;
}
// 타입 별칭
type PersonAlias = {
  name: string;
  age: number;
}

const p1: Person = { name: "joy", age: 34 }
const p2: PersonAlias = { name: "joy", age: 34 }

// const p3: PersonAlias = { name: "joy", age: '34' } // 컴파일오류: age 속성 타입 다름
// const p4: PersonAlias = { name: "joy" } // 컴파일오류: age 속성 누락
// const p5: PersonAlias = { name: "joy", age: 34, job: 'teacher' } // 컴파일오류: 초과속성 job 추가

// == interface 확장 (extends)
interface AnimalI {
  name: string;
}
interface DogI extends AnimalI {
  breed: string;
}
const puppy: DogI = {
  name: "bud",
  breed: "pou"
}

// == type별칭 확장 (& 교차타입)
type AnimalT = {
  name: string;
}
type DogT = Animal & {
  breed: string
}
const doggy: DogT = {
  name: "ho",
  breed: "hooo"
}

// 읽기전용 (인터페이스와 맵드타입)
interface Product {
  name: string,
  price: number
}

// product에 있는 모든 키를 순회하면서 새로운 타입 생성
type ReadonlyProduct = {
  // readonly 수정불가
  readonly [K in keyof Product]: Product[K]
}

const item: ReadonlyProduct = {
  name: "pen",
  price: 3000
}

// 수정 불가
// item.price = 100
// item.name = "change"


// 선택적 속성
interface ProductOp {
  name: string;
  price: number
}

type PartialProduct = {
  [K in keyof ProductOp]?: ProductOp[K]
}
const partialItem: PartialProduct = {
  name: "notbook"
}
const partialItem1: PartialProduct = {
  name: "notbook",
  price: 2000,
  // description: 'error'
}