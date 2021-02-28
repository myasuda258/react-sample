import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CountForm } from './components/CountForm';
import { Cell } from './components/Cell';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [status, setStatus] = useState(Array(5).fill(Array(5).fill(false)))
  const [type, setType] = useState(Array(5).fill(Array(5)))

  function openCell(x:number, y:number) {
    console.log('open: ',x,y,status[x][y])
    const status_ = status
    status_[x][y] = true
    setStatus(status_)
  }

  useCount(count)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Cell status={status} x={0} y={0} type={type[0][0]} onClick={openCell}></Cell>
            <Cell status={status} x={1} y={0} type={type[1][0]} onClick={openCell}></Cell>
            <Cell status={status} x={2} y={0} type={type[2][0]} onClick={openCell}></Cell>
            <Cell status={status} x={3} y={0} type={type[3][0]} onClick={openCell}></Cell>
            <Cell status={status} x={4} y={0} type={type[4][0]} onClick={openCell}></Cell>
          </div>
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
