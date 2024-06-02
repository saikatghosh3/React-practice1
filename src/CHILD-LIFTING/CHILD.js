import React from 'react'

const CHILD = (props) => {
  return (
    <div><p>i am from child</p>
    <p> {props.data}</p>
    </div>
  )
}

export default CHILD