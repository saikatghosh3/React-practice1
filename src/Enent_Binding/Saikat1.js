
import React,{useState} from 'react'

function Saikat1() {

    const [count,setCount] = useState(0)
    const handleInrement = () =>{
        setCount(count + 1)
    }
   return (
    <div>
        <h1> count:{count}</h1>
        <button onClick={handleInrement}>click me!</button>
    </div>
  )
}

export default Saikat1