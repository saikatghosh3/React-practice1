import React from 'react'
import { useState } from 'react'

const FormHandling = () => {
    const [formData, SetFormData] = useState({
        username:"",
        email:"",
        password:"",
        isSubscribe:"",
        role:""
    })
const handleChane = (event)=>{
    const{name,value,type,checked} = event.target;
    const fieldValue = type === 'checkbox' ? checked :value;
     SetFormData({
        ...formData,
        [name]:fieldValue
     });
}
const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('FormData', formData);
}

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChane}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChane}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChane}
                />
              </div>
              <div>
                <label htmlFor="isSubscribe">Subscribe:</label>
                <input type="checkbox"
                id="isSubscribe"
                name="isSubscribe"
                value={formData.isSubscribe}
                onChange={handleChane}
                />
            </div>
            <div>
                <label htmlFor="role">Role:</label>
              <select 
              id ="role"
              name="role"
              value={formData.role}
              onChange={handleChane}
              
              >
                <option value="">Select Role </option>
                <option value="admin">Admin </option>
                <option value="user">User</option>
                <option value="guest">guest </option>

              </select>
            </div>
            <button type='submit'>Submit</button>
            </form> 


    </div>
  )
}

export default FormHandling