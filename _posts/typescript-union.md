---
title: "Typescript 辨别联合类型"
date: "2020-03-16T05:35:07.322Z"
author:
  name: KaiChi
  picture: "/assets/authors/kaichi.jpeg"
---

在使用联合类型时，通常需要判断联合类型的具体类型，考虑如下 🌰

```ts
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;
```

`Square` 和 `Rectangle` 有共同字面量成员 `kind`，一般联合类型的成员有一些自己的行为，此时可以根据 `kind` 属性来判断联合类型，例如下面计算面积的 function。

```ts
function area(s: Shape) {
  if (s.kind === "square") {
    // 现在 TypeScript 知道 s 的类型是 Square
    // 所以你现在能安全使用它
    return s.size * s.size;
  } else {
    // 不是一个 square ？因此 TypeScript 将会推算出 s 一定是 Rectangle
    return s.width * s.height;
  }
}
```

一切都很完美，如果此时 `Shape` 类型增加了一种类型。

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;
```

这时计算面积的 Function 缺少对 `Circle` 类型的处理逻辑，但是你会发现它并不会给你抛出任何错误，这是很糟糕的。

```ts
function area(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  }

  // 如果你能让 TypeScript 给你一个错误，这是不是很棒？
}
```

你可以通过确保块中的类型被推断为与 `never` 类型兼容的类型，以此来捕获错误，例如：

```ts
function area(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  } else {
    // 此时类型被判断为 `Circle`
    // Error: 'Circle' 不能被赋值给 'never'
    const _exhaustiveCheck: never = s;
  }
}
```

它将强制你添加一种新的条件。

```ts
function area(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  } else if (s.kind === "circle") {
    return Math.PI * s.radius ** 2;
  } else {
    // 此时类型收缩为 `never`
    const _exhaustiveCheck: never = s;
  }
}
```

你可以通过 `switch` 实现以上例子。

```ts
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      // 此时类型收缩为 `never`
      const _exhaustiveCheck: never = s;
  }
}
```

如果你使用 `strictNullChecks` 选项来做详细的检查，你应该返回 `_exhaustiveCheck` 变量（类型是 `never`），否则 TypeScript 可能会推断返回值为 `undefined`。

```ts
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}
```
