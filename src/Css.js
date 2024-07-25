import React from 'react'

const Css = () => {

     // Example 3
const headline = {
    color:"#fff",
    backgroundColor:"bule",
}

  return (

   
    <div>
   {/* Example 1. */}
 <h1 style={{color:"red",backgroundColor:"green"}}>This the inline method </h1>

 {/* Example 2 */}

 <div className='primary'> This is Normal method</div>
 {/* In this method we have to make a new file for css,  have to write css in the basis of class name  and import it in the current forder . */}
<div>

    {/* Example 3 */}
 <h1 style={headline}>This is css in js method</h1>
 
</div>


    </div>
  )
}

export default Css