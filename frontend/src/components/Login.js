 
import React,{useEffect, useState} from 'react'
import './Login.css'

import { useNavigate } from 'react-router-dom'
const Login = () => {
const [email,setEmail]= useState('')
const [password,setPassword]=useState('')
const navigate= useNavigate();


useEffect(()=>{
  const auth = localStorage.getItem("user");
  if(auth){
    navigate('/')
  }
},[])


const handlelogin = async ()=>{
  console.log(email,password)
  let result = await fetch('http://localhost:5000/login', {
    method: 'post',
    body: JSON.stringify({email,password}),
    headers :{
      'Content-Type':'application/json'
    }
  });
  result= await result.json();
  console.warn(result)

if(result.auth){
  localStorage.setItem("user",JSON.stringify(result.user))
  localStorage.setItem("token",JSON.stringify(result.auth))

navigate('/');
} else{
  alert("please enter the correct details")
}
}
  return (
    <div className='login'  > 
    <h3   style={{color:"white" , fontSize:"30px"}}>Login Page</h3>
    <div   className='form'>
      <input type="text"  placeholder='Enter email id'  onChange={(e)=>{setEmail(e.target.value)}}     vlaue={email} /> 
      <input type="text"  placeholder='Enter Password'  onChange={(e)=>{setPassword(e.target.value)}}    vlaue={password}/> 
    </div>
    <button  onClick={handlelogin}  className='btn'>Submit</button>
    </div>
  )
}

export default Login