## Primitives

- Boolean

```ts
let isDone: boolean = false;
```

- Number

```ts
let decimal: number = 6;
```

- String

```ts
let color: string = "blue";
```

- Array

```ts
let list: number[] = [1, 2, 7];
let list: Array<number> = [2, 5, 10];
```

- Tuple

```ts
let x: [string, number, boolean] = ["ff", 7, true];
```

- Enum

```ts
// a way of giving more friendly names to sets of numeric values

enum Color { Red, Green, Blue }
let c: Color = Color.Green

// By default, enums begin numbering their members starting at 0.
// You can change this by manually setting the value of one of its members.
// For example, we can start the previous example at 1 instead of 0.

enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
```

- Any

```ts
// opt-out of type-checking and let the values pass through compile-time checks.

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// The any type is a powerful way to work with existing JavaScript,
// allowing you to gradually opt-in and opt-out of type-checking during compilation. 
```

