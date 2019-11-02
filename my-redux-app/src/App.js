import React from 'react';
import SongForm from './components/SongForm';
import Lyrics from './components/Lyrics';

import './App.css';

function App() {
  
  return (
    <div className="App">
        <SongForm />
        <Lyrics />
    </div>
  );
}

export default App;