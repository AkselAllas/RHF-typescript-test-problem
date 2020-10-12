
import './App.css';
import React from 'react';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <TestComponent onSubmit={()=>{console.log("hello")}}/>
    </div>
  );
}

export default App;

