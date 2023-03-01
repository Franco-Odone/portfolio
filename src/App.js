import { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { Default } from './components/PageNotFound/Default';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Sidebar } from './components/Sidebar/Sidebar';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import './App.scss';

function App() {
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
