import React from 'react';
import { AnimatedDigit } from '../AnimatedDigit';

export interface ComponentProps {
  number: number;
}

export const AnimatedNumber: React.FC<ComponentProps> = ({ number }) => {
  const digits = React.useMemo(() => {
    if (!Number(number) && Number(number) !== 0) {
      return ['0'];
    }
    return `${number}`.split('');
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
