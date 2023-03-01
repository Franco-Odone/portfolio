import { Outlet } from 'react-router-dom';

import './layout.scss';

const Layout = () => {
  return (
    <div className="page">
      <span className="tags top-tags">&lt;body&gt;</span>
      {/* Outlet permite que se pueda renderizar los children de la ruta padre manteniendo renderizado el contenido de esta */}
      <Outlet />
      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  );
};

export { Layout };
