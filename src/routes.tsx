import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/HomePage';
import CreateSala from './pages/CreateSala';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="createsala" element={<CreateSala />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
