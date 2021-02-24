import React from 'react'

interface OwnProps {
  count: number
  setCount: Function
}

type Props = OwnProps
export const CountForm : React.FC<Props> = props => {
  return(
    <div>
      <p>You clicked {props.count} times</p>
      <button onClick={() => props.setCount(props.count + 1)}>
        Click me
      </button>
    </div>
  )
}