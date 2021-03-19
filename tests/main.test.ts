import * as assert from 'assert';
import {
  arrayInsertAt,
  arrayRemoveAt,
  pureArrayInsertAt,
  pureArrayRemoveAt,
} from '../dist/main.js';

it('arrayInsertAt', () => {
  const a = [1, 2, 3];
  const b = arrayInsertAt(a, 1, -1);
  assert.deepStrictEqual(a, [1, -1, 2, 3]);
  assert.strictEqual(b, undefined);

  let t: number[] = [];
  arrayInsertAt<number>(t, 0, 1, 2, 3);
  assert.deepStrictEqual(t, [1, 2, 3]);

  t = [1, 2, 3];
  arrayInsertAt(t, 1, -1);
  assert.deepStrictEqual(t, [1, -1, 2, 3]);

  t = [1, 2, 3];
  arrayInsertAt(t, 3, -1, -2);
  assert.deepStrictEqual(t, [1, 2, 3, -1, -2]);
});

it('arrayRemoveAt', () => {
  const a = [1, 2, 3];
  const b = arrayRemoveAt(a, 1);
  assert.deepStrictEqual(a, [1, 3]);
  assert.strictEqual(b, undefined);

  let t = [1, 2, 3];
  arrayRemoveAt(t, 1);
  assert.deepStrictEqual(t, [1, 3]);

  t = [1];
  arrayRemoveAt(t, 0);
  assert.deepStrictEqual(t, []);
});

it('pureArrayInsertAt', () => {
  const a = [1, 2, 3];
  const b = pureArrayInsertAt(a, 1, -1);
  assert.deepStrictEqual(a, [1, 2, 3]);
  assert.deepStrictEqual(b, [1, -1, 2, 3]);

  assert.deepStrictEqual(pureArrayInsertAt<number>([], 0, 1, 2, 3), [1, 2, 3]);
  assert.deepStrictEqual(pureArrayInsertAt([1, 2, 3], 1, -1), [1, -1, 2, 3]);
  assert.deepStrictEqual(pureArrayInsertAt([1, 2, 3], 3, -1, -2), [1, 2, 3, -1, -2]);
});

it('pureArrayRemoveAt', () => {
  const a = [1, 2, 3];
  const b = pureArrayRemoveAt(a, 1);
  assert.deepStrictEqual(a, [1, 2, 3]);
  assert.deepStrictEqual(b, [1, 3]);

  assert.deepStrictEqual(pureArrayRemoveAt([1, 2, 3], 1), [1, 3]);
  assert.deepStrictEqual(pureArrayRemoveAt([1], 0), []);
});
