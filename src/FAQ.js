import React from 'react'
import { useState } from 'react';
import style from "./faq.moudle.css";

const FAQ = ({id,title,desc}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <article className={style.lal}>
        <div>
            <h4>{title}</h4>
            <button onClick={()=>{setToggle(!toggle)}}>{toggle ? '-' : '+'}</button>
        </div>
       {toggle && <p>{desc}</p>}
    </article>
  )
}

export default FAQ