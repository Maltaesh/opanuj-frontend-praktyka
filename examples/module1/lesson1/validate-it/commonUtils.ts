import type { EMPTY_STRING } from './constants';

export type CanThrowError<T> = T & { readonly brand: unique symbol };
export function getHTMLElement<T>(id: string) {
  const element = document.getElementById(id) as T;

  if (!element) {
    throw new Error(`#### Element with id >>> ${id} <<< not found ####`);
  }

  return element as CanThrowError<T>;
}

type Message = 'Valid' | 'Invalid' | typeof EMPTY_STRING;
export const renderResultMessage =
  (result: HTMLDivElement) => (message: Message) => {
    result.innerHTML = message;
  };
