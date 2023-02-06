import { Link } from 'react-router-dom';

import './indexHome.scss';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Franco Odone</h1>
          <h2>Software Developer | MERN Stack </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
};

export { Home };
