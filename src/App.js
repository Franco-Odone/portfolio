import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { Default } from './components/PageNotFound/Default';
import { About } from './components/About/About';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Default />} />
      </Routes>
    </>
  );
}

export default App;
