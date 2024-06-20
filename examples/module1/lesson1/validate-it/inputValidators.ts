import { EMPTY_STRING } from './constants';

const isNotEmptyString = (value: unknown) => value !== EMPTY_STRING;
const isNotANaN = (value: unknown) => !Number.isNaN(value);
const isGreaterOrEqualToZero = (value: number) => value >= 0;
const isLessOrEqualTo100 = (value: number) => value <= 100;
const isEven = (value: number) => value % 2 === 0;

type ValidatorList = Array<(value: any) => boolean>;
const ValidatorList: ValidatorList = [
  isNotEmptyString,
  isNotANaN,
  Number.isInteger,
  isGreaterOrEqualToZero,
  isLessOrEqualTo100,
  isEven,
];

const createValidator = (validatorsList: ValidatorList) => (value: unknown) =>
  validatorsList.every((validator) => validator(value));

export const validateInput = createValidator(ValidatorList);
