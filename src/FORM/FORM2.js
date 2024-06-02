import React, { useState } from 'react'
import style from './form.moudle.css'

function FORM2() {

  
  const [ user, setUser] = useState({name:'',email:'',password:''});
  const {name,email,password} = user;
 


const handleChange = (e) =>{
 setUser({...user,[e.target.name]: e.target.value});
};

const handleSubmit =(e) =>{

  // for every field we updated the full ex: email, name , password. on the above there is simple work.
  // const fieldName = e.target.name;
  
  // if(fieldName==='name'){
  //   setUser( {name:e.target.value, email,password});
  // }else if(fieldName==='email'){
  //   setUser({name, email:e.target.value,password});
  // } else if ( fieldName ==='password'){
  //   setUser({name, email,password:e.target.value});
  // }
  
  console.log(user);
  e.preventDefault()
}

  return (
<div class="container">
        <h1>Registration</h1>
        <form action="" class="form" onSubmit={handleSubmit}>
        <label  for="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={handleChange} required />
        
        <label  for="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter you email"  value={email} onChange={handleChange} required />
        
        <label  for="password" >Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter you password" value={password} onChange={handleChange}required />
        
        <button type="submit" class="submit"> Register</button>
        </form>
    

    </div>
  )
}

export default FORM2