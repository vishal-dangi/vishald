import React, { useState } from "react";
import request from "umi-request";

const Inputform=()=>{
    const [input , setInput]=useState({
     username:"",
     password:"",   
    })

    const handleChange=(e)=>{
       setInput({...input,[e.target.name]:e.target.value})
    }

    const setData=(e)=>{
    e.preventDefault();

    fetch('http://192.168.178.82:3000/login', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: {
           "username": input.username,
           "password": input.password
        }
       });
    }
    
    
    
    
    return (<>
    <div className="bg-gray-300 h-80 w-80 rounded-lg pt-4">
     <h1 className= "text-center text-4xl mb-6">form</h1>
    <label className="font-bold ml-4">UserName</label>

    <input className="p-1 w-72 mx-4" type="text" placeholder="UserName" value={input.username} name="username" onChange={handleChange}/>  

    <div className="mt-4">
    <label className="ml-4 font-bold ">Password</label>

    <input className="p-1 w-72 mx-4" type="password" value={input.password} placeholder="Password" name="password" onChange={handleChange}/>

    <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={setData}>Submit</button>
    </div>
    </div>
    </>)
};
export default Inputform;