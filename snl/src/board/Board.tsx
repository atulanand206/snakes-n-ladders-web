import { useState } from "react"
import { Board, Cell } from "./interfaces";

type Props = {
  board: Board;
  cells: Cell[];
}

export const Grid = (props: Props) => {

  const [cells, setCells] = useState(props.cells)
  const [board, setBoard] = useState(props.board)
  
  return (
    <div>
      {board && <p>{board.size} x {board.size}</p>}
      {cells && cells.map(cell => <div>
        <p>{cell.num}</p>
      </div>)}
    </div>
  )
}
