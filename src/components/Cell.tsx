import React, { useState } from 'react'

interface OwnProps {
  /**
   * 0-8: number of around mines
   * 9: this is mine
   */
  type?: number
  status: Array<Array<boolean>>
  x: number
  y: number
  onClick: Function
}

type Props = OwnProps
export const Cell : React.FC<Props> = props => {
  console.log(props.x,props.y)
  return(
    <button
      className="square"
      onClick={() => {props.onClick(props.x, props.y)}}
    >
      {props.status[props.x][props.y] ? (props.type || '__|') : ' '}
    </button>
  )
}