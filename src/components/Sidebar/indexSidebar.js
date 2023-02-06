import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './indexSidebar.scss';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        {/* Por defecto isActive debe ser false */}
        <NavLink
          className={(isActive) => 'active' + (!isActive ? ' unselected' : '')}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          className={(isActive) => 'about-link' + (!isActive ? 'active' : '')}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={(isActive) => 'contact-link' + (!isActive ? 'active' : '')}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/franco-odone-p/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Franco-Odone"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
