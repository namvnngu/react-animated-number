import React from 'react';
import { AnimatedNumber } from './components/AnimatedNumber';
import './styles.css';

const INCREMENTS = [0.01, 0.1, 1, 10, 100, 999, 1234.56];

export default function App() {
  const [number, setNumber] = React.useState(122.21);
  return (
    <div className="App">
      <AnimatedNumber number={number} />

      <div className="btn-groups">
        <div>
          {INCREMENTS.map((increment) => (
            <button
              key={increment}
              className="btn"
              onClick={() => setNumber((number) => number + increment)}
            >
              + {increment}
            </button>
          ))}
        </div>

        <div>
          {INCREMENTS.map((increment) => (
            <button
              key={increment}
              className="btn"
              onClick={() =>
                setNumber((number) => Math.max(0, number - increment))
              }
            >
              - {increment}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
