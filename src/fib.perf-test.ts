import {measureFunction} from 'reassure';
import {test, jest} from '@jest/globals';

import {fib} from './fib';

jest.setTimeout(60_000);

test('fib 30', async () => {
  await measureFunction(() => fib(30));
});

test('fib 31', async () => {
  await measureFunction(() => fib(31));
});

test('fib 32', async () => {
  await measureFunction(() => fib(32));
});
