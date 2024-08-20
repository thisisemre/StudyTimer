import React,{useState} from 'react';
import Header from './components/Header.js';
import Timer from './components/Timer.js'
import Quotes from './components/Quotes.js';
import './App.css'; 

function App() {
  const [isBreak, setIsBreak] = useState(false);
  
  function handleBreakChange(breakStatus){
    setIsBreak(breakStatus);
  }

  return (
    <div className={`App ${isBreak ? 'break' : 'default'}`}>
      <Header />
      <Timer onBreakChange={handleBreakChange} />
      <Quotes />
  </div>
  );
}

export default App;
