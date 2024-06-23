import React from 'react';
import type { OperationFn } from './types';
import { CalculatorButtonsList } from './CalculatorButtonsList';
import { CalculatorInput } from './CalculatorInput';
import { MATH_OPERATIONS_LIST } from './mathOperations';

export const Calculator = () => {
  const [leftOperand, setLeftOperand] = React.useState<number>(0);
  const [rightOperand, setRightOperand] = React.useState<number>(0);
  const [result, setResult] = React.useState<number | string>(0);
  const [error, setError] = React.useState<string>('');

  const calculate = (operationFn: OperationFn) => {
    operationFn(leftOperand, rightOperand).match({
      Ok: (value) => {
        setResult(value);
        setError('');
      },
      Error: (error) => {
        setResult(0);
        setError(error);
      },
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <CalculatorInput
          onChange={(e) => setLeftOperand(parseFloat(e.target.value))}
          value={leftOperand}
        />
        <CalculatorInput
          onChange={(e) => setRightOperand(parseFloat(e.target.value))}
          value={rightOperand}
        />
      </div>
      <CalculatorButtonsList
        mathOperations={MATH_OPERATIONS_LIST}
        calculate={calculate}
      />
      <div>
        {!error && (
          <p className="rounded-md bg-white shadow-md p-4 font-bold">
            {result}
          </p>
        )}
        {error && (
          <p className="text-red-400 rounded-md bg-white shadow-md p-4 font-bold">
            Wrong operation: {error}
          </p>
        )}
      </div>
    </div>
  );
};
