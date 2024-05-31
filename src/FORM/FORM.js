import React, { useState } from 'react'
import style from './form.moudle.css'

function FORM() {

  const [name,setName]= useState();
  const [email,setEmail]= useState();
  const [password,setPassword]= useState();
 
const handleNameChange = (e) =>{
    setName(e.target.value);
}
const handleEmailChange = (e) =>{
    setEmail(e.target.value);
}
const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
}
const handleSubmit =(e) =>{
  console.log("form is submited");
  let userInfo = {
    name:name,
    email:email,
    password:password,
  };
  console.log(userInfo);
  e.preventDefault()
}

  return (
<div class="container">
        <h1>Registration</h1>
        <form action="" class="form" onSubmit={handleSubmit}>
        <label  for="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={handleNameChange} required />
        
        <label  for="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter you email"  value={email} onChange={handleEmailChange} required />
        
        <label  for="password" >Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter you password" value={password} onChange={handlePasswordChange}required />
        
        <button type="submit" class="submit"> Register</button>
        </form>
    

    </div>
  )
}

export default FORM