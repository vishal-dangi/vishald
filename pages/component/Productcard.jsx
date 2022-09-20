import Link from 'next/link';
import React from 'react';

const Productcard=(props)=>{
    return(<>
    <button><Link href={`/blog/${props?.data?.id}`}>
    <div className="productcard bg-zinc-200 h-96 w-60 rounded-md shadow-lg p-2 mb-6 ">
        <img className="h-24 w-42 rounded-md ml-10" src={props?.data?.thumbnail} alt="product_img" />
        <h1 className="text-center font-bold text-black-200 mt-1">Title-{props?.data?.title}</h1>
        <p className="text-center font-bold text-orange-300 mt-1">Price-{props?.data?.price}</p>
        <p className="text-center font-bold text-sky-600">rating-{props?.data?.rating}</p>
        <p className="text-center font-bold text-lime-600 mt-1">stock-{props?.data?.stock}</p>
        <p className="text-center break-all list-outside">description-{props?.data?.description}</p>
        
    </div>
    </Link></button>
    </>)
};
export default Productcard;