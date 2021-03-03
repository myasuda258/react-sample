import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CountForm } from './components/CountForm';
import { Cell } from './components/Cell';

const initialStatus: boolean[][] = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]

function App() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)
  // const [status, setStatus] = useState(Array(5).fill(Array(5).fill(false)))
  // const [type, setType] = useState(Array(5).fill(Array(5)))
  const [status, setStatus] = useState(initialStatus)

  function openCell(x:number, y:number) {
    console.log('open: ',x,y,status[x][y])
    const status_ = status
    status_[x][y] = true
    setStatus(status_)
  }

  // useCount(count)

  const cellColumns = function(row: boolean[], y: number) {
    return (
      row.map((r: boolean, index: number)=>{
      return (<Cell
        status={r}
        x={index}
        y={y}
      />
      )
    })
    )
  }

  const cellRows = status.map((row: boolean[], index: number) => {
    return (
      <div>
        {cellColumns(row, index)}
      </div>
    )
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
            {cellRows}
          </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
