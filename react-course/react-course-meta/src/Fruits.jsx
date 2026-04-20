import React from 'react'

export default function Fruits(props) {
  return (
    <div>
        {props.fruits.map(f => <h1 key = {f.id}> {f.fruitName}</h1>)}
    </div>
  )
}
