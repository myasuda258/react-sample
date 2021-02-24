import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CountForm } from './components/CountForm';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useCount(count)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CountForm count={count} setCount={setCount}></CountForm>
        <CountForm count={count2} setCount={setCount2}></CountForm>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function useCount(count: number) {
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`count ${count} times`)
  }, [count]);
  return count
}

export default App;
