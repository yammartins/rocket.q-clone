import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Channel from './pages/Channel';
import CreateSala from './pages/CreateSala';
import Homepage from './pages/HomePage';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="createsala" element={<CreateSala />} />

      <Route path="canaldoyam" element={<Channel />} />

    </Routes>
  </BrowserRouter>
);

export default Router;
