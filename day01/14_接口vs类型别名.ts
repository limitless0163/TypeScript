// 接口：
interface IPerson1 {
  name: string
  age: number
  sayHi(): void
}

// 类型别名
type IPerson2 = {
  name: string
  age: number
  sayHi(): void
}

let person: IPerson2 = {
  name: '刘老师',
  age: 18,
  sayHi() {}
}
