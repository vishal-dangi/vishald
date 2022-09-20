import React from "react";
import Link from 'next/link';
import { IconName, VscArchive } from "react-icons/vsc";

const Navbar=()=>{
    return (<>
    <nav >
    <div className="container-fluid mx-auto bg-slate-100 shadow-lg rounded p-4 flex justify-between">
      <h1 className="text-xl font-bold"><Link href="/">My Web</Link></h1> 

     <ul className="sm:self-center space-x-4">
      <li className="sm:inline-block"><Link  href="/">Home</Link></li>
      <li className="sm:inline-block"><Link href="/About">About</Link></li>
      <li className="sm:inline-block"><Link href="/Product">Product</Link></li>
      <li className="sm:inline-block"><Link href="/Contact">Contact</Link></li>
      {/* <li className="sm:inline-block"><Link href="../pages/blog/[id]">ProductDetail</Link></li> */}
      <li className="sm:inline-block"> <button> <VscArchive/></button> </li>
      
         </ul>
    </div>
    </nav>
    </>)
};
export default Navbar;