import React, { useState } from 'react'

const Form3 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleNameChange = (e) =>{
       setName(e.target.value);// Here we'll get updated value
    };
    const handleEmailChange = (e) =>{
       setEmail(e.target.value);// Here we'll get updated value
    };
    const handlePasswordChange = (e) =>{
       setPassword(e.target.value);// Here we'll get updated value
    };
    const newUser ={
      name,email,password
    }
    const handleSubmit =(e) =>{
      e.preventDefault();
      console.log(newUser);
    };
    
  return (
    <div>
        <h2>User signup</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" name="name" onChange={handleNameChange} value={name}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type="text" id="email" name="email" onChange={handleEmailChange} value={email}/>
            </div>
            <div>
                <label htmlFor='Password'>Password:</label>
                <input type="text" id="password" name="password" onChange={handlePasswordChange} value={password}/>
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}

// same task can be done by the use of formik
// in next video we'll see that.

export default Form3