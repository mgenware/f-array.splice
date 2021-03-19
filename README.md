# f-array.splice

[![Build Status](https://github.com/mgenware/f-array.splice/workflows/Build/badge.svg)](https://github.com/mgenware/f-array.splice/actions)
[![npm version](https://img.shields.io/npm/v/f-array.splice.svg?style=flat-square)](https://npmjs.com/package/f-array.splice)
[![Node.js Version](http://img.shields.io/node/v/f-array.splice.svg?style=flat-square)](https://nodejs.org/en/)

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
