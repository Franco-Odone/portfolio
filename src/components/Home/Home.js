import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';

import './home.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'Franco Odone'.split('');
  const jobArray = 'Software Developer.'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Hi,'.split('')}
              index={1}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"I'm ".split('')}
              index={4}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={8}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={19}
            />
          </h1>
          <h2>JAVASCRIPT | MERN STACK | ALWAYS LEARNING </h2>
          <Link to="/contact" className="contact-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
};

export { Home };
