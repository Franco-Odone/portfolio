import { useEffect, useState } from 'react';

import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';

import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              index={1}
            />
          </h1>
          <p>
            I'm a Chilean developer, I discovered my passion for tecnology and
            programming throughout the pandemic, and since then I've been
            totally in love with the learning process, therefore I'm totally
            willing to take my knowledge and career to the next level.
          </p>
          <br />
          <p>
            I love creating and contributing to coding projects which can
            potentially be a way to solve real-life problems with code. Looking
            forward to be part of projects which can help me boost my abilities
            and capacities, on a symbiotic collaboration. 🤝
          </p>
          <br />
          <p>
            I'm a very ambitious developer looking for a role in an established
            IT company with the opportunity to work with the latest technologies
            on challenging and diverse projects.
          </p>
          <br />
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops, so let's keep in touch!
          </p>
        </div>

        <div className="iconsContainer">
          <div>
            <FontAwesomeIcon
              className="icon"
              icon={faJsSquare}
              color="#EFD81D"
            />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faNodeJs} color="#68A063" />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faReact} color="#5ED4F4" />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faHtml5} color="#F06529" />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faCss3} color="#28A4D9" />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </>
  );
};

export { About };
