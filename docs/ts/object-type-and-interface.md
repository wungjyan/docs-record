# 使用接口描述对象类型

在 ts 中一般使用 **接口（interface）** 来描述对象类型，它可以声明一个结构来描述对象应该含有哪些属性以及属性类型。

使用 `interface` 来定义接口：

```ts
// 定义接口用来描述人的信息
interface PersonDescription {
  name: string
  age: number
  male: boolean
}

// 使用接口来标注对象，对象实现接口中的属性及类型
const person: PersonDescription = {
  name: 'wj',
  age: 18,
  male: true,
}
// ❌ error，Property 'hobby' does not exist on type 'PersonDescription'
person.hobby = '吃饭'
```

使用`PersonDescription`接口来“描述”对象，表示：

- 对象上每一个属性的值必须一一对应到接口的属性类型
- 对象需要严格实现接口描述的所有属性，不能多也不能少，包括使用 `person.xxx = 'vvv'` 这样的额外属性赋值也不行

除了声明属性以及属性的类型以外，我们还可以对属性进行修饰，常见的修饰包括可选（Optional） 与 只读（Readonly） 这两种。

## 接口属性修饰

使用一个 `?` 来标记一个属性为可选的：

```ts
interface PersonDescription {
  name: string
  age: number
  male?: boolean
  fn?: Function
}

const person: PersonDescription = {
  name: 'wj',
  age: 18,
  male: true,
}
```

这种情况下，即使你对 `male` 属性赋值了，但是它的类型还是 `boolean | undefined`，可选的意思就是可能是 `undefined`。同理，即使你对 `fn` 赋值了函数，调用 `person.fn()` 也是报错的。ts 只进行类型检查，不知道你到底有没有添加上可选属性，这个时候你可以使用类型断言、非空断言或可选链解决。

还可以使用 `readonly` 标记属性为只读。只读的意思就是这个属性不可以被修改。

```ts
interface PersonDescription {
  readonly name: string
}

const person: PersonDescription = {
  name: 'wj',
}

// ❌ error，Cannot assign to 'name' because it is a read-only property.
person.name = 'ww'
```

## type 与 interface

`type` 用于定义类型别名，也可以来描述对象类型：

```ts
type PersonDescription2 = {
  name: string
  age: number
  male?: boolean
}
const person2: PersonDescription2 = {
  name: 'wj',
  age: 18,
}
```

会发现使用 `type` 和使用 `interface` 基本无差异，只是写法上的不同，你完全可以使用 `type` 来代替 `interface`。只是一些推荐的用法是，**interface 用来描述对象、类的结构，而类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型**。
