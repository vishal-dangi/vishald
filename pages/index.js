import Head from 'next/head';
import { useState } from 'react'
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Kml, { Paji } from './component/Practice';

export default function Home() {
  const [input,setInput]=useState({
    useremail:'',
    password:''
  });
  const router = useRouter();

  const inputHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }

  const logData =(e)=>{
    e.preventDefault();
  
    console.log(input.useremail);
    console.log(input.password);
    if(input.useremail === 'undefined'||input.useremail ==""){
      alert('Please enter your Email'); 
    }else if(input.password === 'undefined'||input.password ==""){
      alert('Please enter your Password');
    }else{
      router.push('/Product');
    }
    }
  
  
  

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="container grid grid-cols-2 gap-3" >
        <div>
          <h1 className="font-medium font-serif  text-4xl mt-32 ml-6">My web home page</h1>
          <img className="m-20 w-60" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="image" />
        </div>

        <div className="w-96 h-72 shadow-xl rounded-md bg-slate-100 mt-32 ml-56">
          <div className="box flex-row items-center justify-center lg:justify-start">
            <h1 className="font-light text-2xl mt-30 text-center ">Login</h1>
            <div className="mt-2">
              <label className="font-light ml-12 flex">Email: </label>
              <input className="ml-12 rounded-md p-1 align-center w-64" type="text" value={input.useremail} placeholder='Enter your Email' onChange={inputHandler} name="useremail"/>
            </div>
            <div className="mt-4">
              <label className="font-light ml-12 flex">Password: </label>
              <input className="flex ml-12 rounded-md p-1 w-64" value={input.password} type="password" placeholder='Enter your Password' onChange={inputHandler} name="password" />
            </div>
            <button className="m-10 flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logData}>Submit</button>
          </div>
        </div>
      </div>
      <Kml/>
      <Paji/>
    </>
  )
}
