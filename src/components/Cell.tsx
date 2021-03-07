import React, { useEffect } from 'react'

interface OwnProps {
  /**
   * 0-8: number of around mines
   * 9: this is mine
   */
  type?: number
  status: boolean
  x: number
  y: number
  onClick: (x: number, y:number) => void
}

type Props = OwnProps
export const Cell : React.FC<Props> = props => {
  const handleClick = (e: React.MouseEvent) => {
    props.onClick(props.x,props.y)
  }
  return(
    <button
      className="square"
      onClick={handleClick}
    >
      {
      props.status ? 'X' : ' '
      }
    </button>
  )
}