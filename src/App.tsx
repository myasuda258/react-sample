import React, { useEffect, useState } from 'react';
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

const initialTypes: number[][] = [
  [0, 2, 0, 9, 0],
  [1, 0, 3, 0, 5],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

function App() {
  const [gameStatus, setGameStatus] = useState('')
  const [status, setStatus] = useState(initialStatus)
  const [types, setTypes] = useState(initialTypes)
  /**
   * YET:  未スタート
   * GAME: ゲーム中
   * CLR:  クリア
   * OUT:  失敗
   */

  // useEffect(()=>{
  //   console.log('START')
  // },[gameStatus])

  useEffect(()=>{
    // 初回レンダリング時、RESET時のみ、YETに設定する
    if (gameStatus === '') {
      setGameStatus('YET')
      return
    }
    if (gameStatus === 'YET') {
      setGameStatus('GAME')
      console.log('GAME START !!!')
    }
  },[status])

  const init = () => {
    console.log('init')
    setGameStatus('')
    setStatus(initialStatus)
  }

  const setMine = () => {
    console.log(Math.floor(Math.random() * 5))
  }

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
        type={types[y][index]}
        onClick={() => handleCellClick(index, y)}
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
          <button onClick={init}>{gameStatus === 'YET' ? '---' : 'reset'}</button>
        </div>
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
