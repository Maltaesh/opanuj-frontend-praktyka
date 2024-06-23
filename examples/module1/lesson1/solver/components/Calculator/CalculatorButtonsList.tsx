import type { MathOperationList, OperationFn } from './types';
import { Button } from '../Button';

type CalculatorButtonsProps = {
  calculate: (operationFn: OperationFn) => void;
  mathOperations: MathOperationList;
};
export const CalculatorButtonsList = (props: CalculatorButtonsProps) => {
  const { calculate, mathOperations } = props;
  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {mathOperations.map(({ fn, mathSymbol }) => (
        <Button key={mathSymbol} onClick={() => calculate(fn)}>
          {mathSymbol}
        </Button>
      ))}
    </div>
  );
};
