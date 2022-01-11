import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/HomePage';
import About from './pages/About';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
