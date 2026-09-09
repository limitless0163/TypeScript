let person1: { name: string; age: number; sayHi(): void } = {
  name: '刘老师',
  age: 18,
  sayHi() {}
}


// 接口：
interface IPerson {
  name: string
  age: number
  sayHi(): void
}

let person2: IPerson = {
  name: '刘老师',
  age: 18,
  sayHi() {}
}

let person3: IPerson = {
  name: 'jack',
  age: 16,
  sayHi() {}
}
