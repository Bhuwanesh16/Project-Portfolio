import React from "react";
import { useState } from 'react';
function Login()
{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <center>
                <h1>Email</h1>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter a Email" required/>
                <h1>Password</h1>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter a Password" required/>
                <button type="submit">Submit</button>
                </center>
            </form>
        </div>
    );
}
export default Login;