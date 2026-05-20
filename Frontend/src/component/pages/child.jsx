import React from 'react'
import child from '../child.jsx';
const child = (props) => {
  return (
    <div>

        <p>{`My name is ${props.name}`}</p>
        <p>Department : {props.dept}</p>
        <p>Moblie No : {props.mobile}</p>
    </div>  
    )
}

export default child