import React from 'react';
import './App.css';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';


function App() {
  return (
    <div>
    App page
    <Home />
    <Rooms />
    <SingleRoom />
    <Error />
    </div>
  );
}

export default App;
