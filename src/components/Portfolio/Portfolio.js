import { useState, useEffect } from 'react';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import './portfolio.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={'Portfolio'.split('')}
            index={1}
            letterClass={letterClass}
          />
        </h1>
      </div>
    </div>
  );
};

export { Portfolio };
