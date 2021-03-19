# f-array.splice

F\*\*\* the `array.splice`.

## Installation

```sh
yarn add f-array.splice
```

## Usage

```ts
import { arrayInsertAt, arrayRemoveAt } from 'f-array.splice';

const mutableArray = [1, 2, 3];
// Inserts [-1, -2] at index 2.
arrayInsertAt(mutableArray, 2, -1, -2);
// mutableArray: 1, 2, -1, -2, 3

// Remove the item at index 1.
arrayRemoveAt(mutableArray, 1);
// mutableArray: 1, -1, -2, 3
```
