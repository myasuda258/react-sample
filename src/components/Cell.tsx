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
  onClick: () => void
}

type Props = OwnProps
export const Cell : React.FC<Props> = props => {
  const isOpen = props.status
  const buttonStyles = isOpen ? {background: '#FFF'} : {background: '#CCC'}
  const buttonBody = isOpen ? props.type : ''
  const handleClick = (e: React.MouseEvent) => {
    props.onClick()
  }
  return(
    <button
      className="square"
      onClick={isOpen ? ()=>{} : handleClick}
      style={buttonStyles}
    >
      {buttonBody}
    </button>
  )
}