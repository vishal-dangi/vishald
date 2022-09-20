
import Link from "next/link";
import { useMemo } from "react";
import { useState } from "react";
import MuCard from "./component/MuCard";



const About=()=>{
    const [inc,setInc]= useState(1);
    const [mul,setMul]= useState(1);

    const Increment =()=>{
      
     setInc(inc+1);
    }

    const Multi= useMemo(()=>{
      return  setMul(mul*2);
    },[mul])

    // const decrement =()=>{
        
    //     setMul(mul*2);
    // }
    console.log("...........");
    return (<>

<div>
    <div className=" mt-6 pt-12 h-80 w-11/12 bg-blue-100 ml-12 rounded-md shadow-lg">
    
    <h1 className=" font-bold text-6xl text-center ">About this Web</h1>
    <p className="text-center pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid ducimus eius enim atque tempore, eveniet, consequuntur impedit minima excepturi illum amet! Animi placeat corrupti in dolorum voluptatibus natus voluptate.</p>  
    <button className="m-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "><Link href="/">Go Home</Link></button>
    </div>
    
    <div className="m-6 grid grid-cols-3 ">
   <MuCard/>
   <MuCard/>
   <MuCard/>
   
   </div>
   </div>
   <button className="bg-blue-400 hover:bg-slate-600 px-6 py-1 rounded font-bold" onClick={Increment}>Inc</button>
   <h2>Inc-{inc}</h2>
    
   <button className=" bg-blue-400 hover:bg-slate-600 px-6 py-1 rounded font-bold mt-2" onClick={Multi}>Mul</button>
   <h2>Num-{mul}</h2>
    </>
    )
};
export default About;