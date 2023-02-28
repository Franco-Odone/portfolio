import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { Sidebar } from '../Sidebar/Sidebar';

import './layout.scss';

const Layout = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          pauseOnBlur: true,
          style: {
            animation: 'fadeIn 3s forwards',
            animationDelay: '1s',
          },
          background: {
            color: {
              value: '#022c43',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              mode: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  duration: 0.4,
                  distance: 180,
                },
              },
            },
          },
          particles: {
            color: {
              value: '#ffd700',
            },
            links: {
              enable: true,
              width: 1,
              opacity: 1,
              distance: 150,
            },
            move: {
              enable: true,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            collisions: {
              enable: true,
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              min: 1,
              max: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Sidebar />
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
    </div>
  );
};

export { Layout };
