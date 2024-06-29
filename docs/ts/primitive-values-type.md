# 原始值类型

ts 中的原始值类型几乎与 js 中的保持一致，可以一一对应起来：

```ts
const str: string = 'hello'
const num: number = 24
const bol: boolean = false
const undef: undefined = undefined
const nul: null = null
const bigintVar1: bigint = 9007199254740991n
const bigintVar2: bigint = BigInt(9007199254740991)
const symbolVar: symbol = Symbol('unique')
```

注意 `bigint` 类型值是在 `ES2020` 新加的，所以ts编译目标需要至少设置到 `ES2020`。

这些类型中，只有 `null` 和 `undefined` 与在 js 中有些许差别，这里需要详细介绍一下。

## null 和 undefined

在 js 中，`null` 表示**有值，但值为空** ，而 `undefined` 表示**未定义，没有值** 。但是在 ts 中，它们都是一个有具体意义的类型值。在没有开启 `strictNullChecks` 检查的情况下，它们可以成为**其他类型的子类型**，且可以**互相赋值**，示例如下：

```ts
let nul: null = null
let und: undefined = undefined

// 以下情况仅在 strictNullChecks 未开启时有效

// 可以互相被赋值
nul = undefined
und = null

// 可以被赋值给其他类型
let str1: string = null
let str2: string = undefined
```

在 js 中，如果一个函数最后没有显示 return 值，或者没有 return，那么默认返回的就是 `undefined` 。但是在 ts 中，情况变得不一样，如果函数没有 return 或者 return 为空，那么函数返回类型是 `void` ，除非手动 return 了 `undefined`，返回值类型才是 `undefined`，示例代码：

```ts
// 在 ts 中，func1 和 func2返回类型是 void
function func1() {}
function func2() {
  return
}
// 这里推导返回类型是 undefined，但是如果关闭 strictNullChecks，这里会被推导为 any
function func3() {
  return undefined
}
```

`func3` 函数显示 return 了 `undefined` ，推导返回类型就是 `undefined`，但是在关闭 `strictNullChecks` 情况，会被推导为 `any`，这种情况需要注意一下。

再说 `void` 类型，在 ts 中它表示空类型，如果函数没有返回值，即推导为 `void` 类型。在关闭 `strictNullChecks` 情况，`null` 和 `undefined` 都可以被赋值给 `void` 类型，如下：

```ts
// 返回 null，但是可以用 void 类型接
function func4(): void {
  return null
}
// null 和 undefined 可以赋值给 void 类型
const voidVar1: void = null
const voidVar2: void = undefined
```

所以说到这，有一个很关键的点就是 `strictNullChecks` 的开启关闭挺混淆概念的，有点乱。所以我觉得在生产开发中，应该始终开启 `strictNullChecks` 检查。

## 总结

在 ts 中，`null` 和 `undefined` 都是有意义的类型值，在开发中应始终开启 `strictNullChecks` 检查，当开启后，有如下表现：

- `null` 和 `undefined` 类型不能互相赋值，且不能被作为子类型赋值给其他类型；
- 函数没有 return 或者 return 具体值时，推导为返回 `void  ` 类型，除非手动指定返回 `undefined` ，则返回值类型是 `undefined`。同时如果函数 `return undefined` 了，函数的返回值类型可以使用 `void` 标注；
- `void` 类型是空类型，不能被赋值为其他类型。
