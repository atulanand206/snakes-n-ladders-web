import { useState } from 'react';
import './App.css';
import { Grid } from './board/Board';
import { newBoard } from './board/Server';

function App() {
  const [board, setBoard] = useState()
  const [cells, setCells] = useState()

  newBoard().then(res => {
    setBoard(res)
    var c = []
    for (let i = 0; i < res.board.size; i++) {
      c.push({num: i + 1})
    }
    setCells(c)
  })

  return (
    <div className="App">
      <Grid board={board} cells={cells}/>
    </div>
  );
}



export default App;
