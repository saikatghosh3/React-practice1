import React, { useState } from 'react'

const Toggle = () => {
    const [Toggle, setToggle]=useState(true);
  return (
    <div style={{margin:"1rem", backgroundColor:"pink", padding:"1rem"}}>
        { Toggle && (
            // we put it in the conditions so that we can make it work
            <p>Anisul islam is the best online teachers ever i've seen.
            He makes his lessons interesting and easier to understand. I am learning by watching his videos . And it is really awesome. I suggest everyone to watch his videos.
            
        </p>
        )}
        <div style={{textAlign:"center"}}>
            <button style={{border:"1px solid balck",borderRadius:"10px"}} onClick={()=>{ setToggle (!Toggle);}}>{Toggle ? "hide" : "show"}</button>
        </div>
    </div>
  )
}

export default Toggle