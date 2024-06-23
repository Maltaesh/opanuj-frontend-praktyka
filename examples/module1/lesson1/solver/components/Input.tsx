import React from 'react';

type InputProps = {
  initialValue: number;
  getValue: (value: number) => void;
};

export const InputNumber = (props: InputProps) => {
  const { initialValue, getValue, ...restProps } = props;

  const [input, setInput] = React.useState(initialValue);

  React.useEffect(() => {
    getValue(input);
  }, [input, getValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(parseFloat(value));
  };

  return (
    <input
      {...restProps}
      className="rounded-md shadow-md p-4"
      value={input}
      onChange={handleChange}
      type="number"
    />
  );
};
