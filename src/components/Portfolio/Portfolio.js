import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import './portfolio.scss';

const Portfolio = () => {
  const { items: data } = useSelector((state) => state.proyects);
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
        <div>
          <div className="images-container">
            {data.map((element) => {
              return (
                <div className="image-box" key={element._id}>
                  <img
                    src={require('../../assets/images/' + element.img + '.png')}
                    className="portfolio-image"
                    alt={element.name}
                  />
                  <div className="content">
                    <p className="title">{element.name}</p>
                    <h4 className="description">{element.description}</h4>
                    <button
                      className="btn"
                      onClick={() => window.open(element.url)}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Portfolio };
