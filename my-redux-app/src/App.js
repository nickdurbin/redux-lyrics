import React from 'react';
import SongForm from './components/SongForm';
import Title from './components/Title';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Song Lyrics</h1>
        <SongForm />
        <Title />
    </div>
  );
}

export default App;