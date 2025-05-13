class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

const john = new Person('John', 30)
const dave = new Person('Dave', 43)

console.log(john.describe());
// John is 30 years old.
console.log(dave.describe());
// Dave is 43 years old.

class Book {
  title: string;
  pages: number;

  constructor(title: string = "Untitled", pages: number = 100) {
    this.title = title;
    this.pages = pages;
  }

  summary(): string {
    return `${this.title} has ${this.pages} pages.`;
  }
}

const b1 = new Book();
const b2 = new Book("typescript", 300)

console.log(b1.summary());
// Untitled has 100 pages.
console.log(b2.summary());
// typescript has 300 pages

class Logger {
  constructor(prefix?: string, ...messages: string[]) {
    const tag = prefix ?? "Log";
    console.log(`[${tag}]`, ...messages);
  }
}

new Logger();
// [Log]
new Logger("Info");
// [Info]
new Logger("Error", "wrong", "code: 400");
// [Error] wrong code: 400

class User {
  public id: number; // 어디에서든 접근 가능
  private password: string; // 외부에서 접근 불가 (해당 클래스 내에서만 사용)
  protected email: string; // 외부에서 접근 불가 (해당 클래스 & 상속받은 클래스에 사용가능)

  constructor(
    id: number,
    password: string,
    email: string
  ) {
    this.id = id;
    this.password = password;
    this.email = email
  }

  // pubic 
  checkPassword(pw: string): boolean {
    return this.password === pw;
  }
}

const user = new User(1, "secret", 'user@naver.com')
console.log(user.id); // 1
// console.log(user.password);
// console.log(user.email);

class Admin extends User {
  resetEmail(newEmail: string) {
    this.email = newEmail
  }
  getInfo() {
    return {
      id: this.id,
      // password: this.password, // private라서 사용불가
      email: this.email // 상속받은 클래스 
    }
  }
}

class UserA {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// 생성자 단축 문법
class UserB {
  constructor(
    public id: number,
    public name: string
  ) {
  }
}

const a = new UserA(1, "joy")
console.log(a.id, a.name); // 1 joy

const b = new UserB(2, "dave")
console.log(b.id, b.name); // 2 dave

class Config {
  private readonly appName1: string;
  readonly appName: string;
  version: string = "1.0.0";

  constructor(appName: string) {
    this.appName = appName;
    this.appName1 = appName;
  }

  print() {
    console.log(`${this.appName} v${this.version}`);
  }
}

const cfg = new Config("My app");
cfg.version = "2.0.0"
console.log(cfg.appName); // My app
// console.log(cfg.appName1); // private
console.log(cfg.version); // 2.0.0
// cfg.name = "changed" // 컴파일 오류 (읽기 전용)

class Account {
  constructor(
    public id: number,
    private password: string,
    protected email: string,
    readonly createdAt: Date
  ) { }

  protected login(pw: string): boolean {
    return this.password === pw
  }
}

const acc = new Account(100, 'pw', 'user@naver.com', new Date());
console.log(acc.id, acc.createdAt); // 100 2025-05-13T14:28:34.639Z
// console.log(acc.password); // private
// console.log(acc.email); // protected
// console.log(acc.login("pw")); // protected
// acc.createdAt = new Date() // readonly
