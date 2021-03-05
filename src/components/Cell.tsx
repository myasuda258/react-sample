import React from 'react'

interface OwnProps {
  /**
   * 0-8: number of around mines
   * 9: this is mine
   */
  type?: number
  status: boolean
  x: number
  y: number
  onClick: Function
}

type Props = OwnProps
export const Cell : React.FC<Props> = props => {
  // console.log(props.x,props.y)
  return(
    <button
      className="square"
      onClick = {()=>{console.log('x,y:::', props.x, props.y);props.onClick(props.x, props.y)}}
      // onClick={() => {props.onClick(props.x, props.y)}}
    >
      {
      // props.status ? (props.type || '__|') : ' '
      props.status ? 'X': ''
      }
    </button>
  )
}