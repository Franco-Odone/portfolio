import { useSelector } from 'react-redux';

import './portfolio.scss';

const Portfolio = () => {
  const { items: data } = useSelector((state) => state.proyects);

  return (
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
              <button className="btn" onClick={() => window.open(element.url)}>
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Portfolio };
