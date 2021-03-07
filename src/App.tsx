import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cell } from './components/Cell';

const initialStatus: boolean[][] = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]

function App() {
  const [status, setStatus] = useState(initialStatus)

  const handleCellClick = function(x:number, y:number) {
    console.log('open: ',x,y,status[y][x],'->',!status[y][x])
    const status_ = JSON.parse(JSON.stringify(status))
    status_[y][x] = !status_[y][x]
    setStatus(status_)
  }

  const cellColumns = function(row: boolean[], y: number) {
    return (
      row.map((r: boolean, index: number)=>{
      return (<Cell
        key={y * status.length + index}
        status={r}
        x={index}
        y={y}
        onClick={handleCellClick}
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

export default App;
