import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cell } from './components/Cell';

const LENGTH_TABLE_SIZE = 5

const initialStatus: boolean[][] = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]

const initialTypes: number[][] = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
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
    initTypes(5)
  }

  const allOpen = ()=>{
    console.log(types)
    const status_ = Array(LENGTH_TABLE_SIZE).fill(Array(LENGTH_TABLE_SIZE).fill(true))
    setStatus(status_)
  }

  const initTypes = (num: number) => {
    console.log('inittype')
    setMine(num)
    // setNumber()
    console.log('end____inittype')
  }

  const setMine = (num: number) => {
    let x,y
    const types_: number[][] = JSON.parse(JSON.stringify(initialTypes))
    // 引数の数分ループ
    for(let i = 0; i<num; i++) {
      do {
        x = Math.floor(Math.random() * LENGTH_TABLE_SIZE)
        y = Math.floor(Math.random() * LENGTH_TABLE_SIZE)
      } while (types_[y][x] === 9)
      types_[y][x] = 9
      console.log('init Types: ', x, y)
    }
    console.log(JSON.parse(JSON.stringify(types_)))
    // setNumber(types_)
    
    // 数字の設定
    types_.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell !== 9) {
          let count = 0
          if (y > 0) {
            if (x > 0) {
              console.log(types_[y-1][x-1])
              count += types_[y-1][x-1]>=9 ? 1 : 0
            }
            console.log(types_[y-1][x])
            count += types_[y-1][x]>=9 ? 1 : 0
            if (x < LENGTH_TABLE_SIZE-1) {
              console.log(types_[y-1][x+1])
              count += types_[y-1][x+1]>=9 ? 1 : 0
            }
          }
          
          if (true) {
            if (x > 0) {
              count += types_[y][x-1]>=9 ? 1 : 0
            }
            count += types_[y][x]>=9 ? 1 : 0
            if (x < LENGTH_TABLE_SIZE-1) {
              count += types_[y][x+1]>=9 ? 1 : 0
            }
          }
          
          if (y < LENGTH_TABLE_SIZE-1) {
            if (x > 0) {
              count += types_[y+1][x-1]>=9 ? 1 : 0
            }
            count += types_[y+1][x]>=9 ? 1 : 0
            if (x < LENGTH_TABLE_SIZE-1) {
              count += types_[y+1][x+1]>=9 ? 1 : 0
            }
          }
          types_[y][x] = count
        }
      })
    })
    setTypes(types_)
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
        <div>
          <button onClick={allOpen}>end</button>
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
