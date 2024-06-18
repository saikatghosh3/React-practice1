import React from 'react'
import { useState } from 'react'
import './Hideandshow.css'

const Hideandshow = () => {
    const [status,setStatus] = useState(true);
  return (
    <div className='app'>

        <h1>Show,Hide and Toggle</h1>
        {status ? <div className='status'>content </div> : null}

        <div className='button'>
        <button  className='btn' onClick={()=>setStatus(false)}>Hide</button>
        <button className='btn' onClick={()=>setStatus(true)}>Show</button>
        <button className='btn' onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    </div>
  )
}

export default Hideandshow