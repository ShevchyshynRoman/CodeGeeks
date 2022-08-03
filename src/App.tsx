import React from 'react';
import './App.scss';

import { VideoChat } from './components/Chat/VideoChat';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <VideoChat />
      <Footer />
    </div>
  );
};
