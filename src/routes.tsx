import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Channel from './pages/Channel';
import MessageChat from './pages/ChannelMessage';
import CreateSala from './pages/CreateSala';
import Homepage from './pages/HomePage';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="create-room" element={<CreateSala />} />

      <Route path="room/:id" element={<Channel />} />

      <Route path="message" element={<MessageChat />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
