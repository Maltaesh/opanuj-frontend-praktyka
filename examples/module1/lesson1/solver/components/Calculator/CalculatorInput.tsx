import React from 'react';

type CalculatorInput = {
  value: number;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CalculatorInput = (props: CalculatorInput) => {
  return (
    <input type="number" className="rounded-md shadow-md p-4" {...props} />
  );
};
