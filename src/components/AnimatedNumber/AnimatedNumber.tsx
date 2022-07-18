import React from 'react';
import { AnimatedDigit } from '../AnimatedDigit';

export interface ComponentProps {
  number: number;
}

const decimalNumberFormatter = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const generateTwoDecimalPlacesFloor = (num: number) =>
  decimalNumberFormatter.format(Math.floor(num * 100) / 100);

export const AnimatedNumber: React.FC<ComponentProps> = ({ number }) => {
  const digits = React.useMemo(() => {
    if (!Number(number) && Number(number) !== 0) {
      return ['0'];
    }
    return generateTwoDecimalPlacesFloor(number).split('');
  }, [number]);

  return (
    <div style={{ display: 'flex' }}>
      {digits.map((digit, index) =>
        Number(digit) || Number(digit) === 0 ? (
          <AnimatedDigit key={index} height={18} digit={Number(digit)} />
        ) : (
          <div key={index}>{digit}</div>
        ),
      )}
    </div>
  );
};
