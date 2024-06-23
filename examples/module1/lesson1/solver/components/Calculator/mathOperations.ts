import { Result } from '@swan-io/boxed';
import type { MathOperationList, OperationFn } from './types';

export function add(a: number, b: number): Result<number, never> {
  return Result.Ok(a + b);
}
export function sub(a: number, b: number): Result<number, never> {
  return Result.Ok(a - b);
}
export function mul(a: number, b: number): Result<number, never> {
  return Result.Ok(a * b);
}

export function div(a: number, b: number): Result<number, string> {
  return b !== 0 ? Result.Ok(a / b) : Result.Error('Division by zero');
}

export const MATH_OPERATIONS_LIST: MathOperationList = [
  {
    fn: add,
    mathSymbol: '+',
  },
  {
    fn: sub,
    mathSymbol: '-',
  },
  {
    fn: mul,
    mathSymbol: '*',
  },
  {
    fn: div,
    mathSymbol: '/',
  },
] as const;
