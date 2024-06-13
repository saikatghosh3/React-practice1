import React from 'react'
import { useState } from 'react';
import {useFormik} from 'formik';

const Form4 = () => {
    const formik = useFormik({
initialValues:{
    name:'',
    email:'',
    password:''
},
onSubmit:(values) =>{
    console.log(values);
}
    })

   
    
    
    const handleSubmit =(e) =>{
      e.preventDefault();
     
    };




  return (
    <div> <h2>User signup</h2>
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        </div>
        <div>
            <label htmlFor='Password'>Password:</label>
            <input type="text" id="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        </div>
        <button type="submit">Signup</button>
    </form></div>
  )
}

export default Form4