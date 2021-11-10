import './App.css';
import React from 'react'
import Stars from './Stars'

function App() {
  const count = 3;
  return (
    <div className="App">
      <Stars count={count}/>
    </div>
  );
}

export default App;
