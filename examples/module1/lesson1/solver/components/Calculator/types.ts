import type { Result } from '@swan-io/boxed';

export type OperationFn = (a: number, b: number) => Result<number, string>;

export type MathOperationList = { fn: OperationFn; mathSymbol: string }[];
