import React from 'react'

const Conditionalren = () => {
 const IsLoggedIn = false;// for first example 
    const items =["Apple", "Banana","Orange", "pineapple", "jackfruit"]; // for second example.
  return (
    <div>
 {/* first example */}
 {IsLoggedIn ? <h2>welcome user</h2> : <h2>Welcome guest</h2>}

    {/* second example */}
        {items.length > 0 ? (
            <ul>
                {items.map((item, index )=> (
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        ) :(<p>Nothing to Display</p>
        )}


    </div>
  )
}

export default Conditionalren