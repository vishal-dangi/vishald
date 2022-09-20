import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';




const ProductDetail = () => {
   const [productDetail, setproductDetail] = useState([]);
   const router = useRouter();


   const ProductApi = async (pid) => {
      if (pid !== "" && pid !== undefined) {
         try {
            const data = await fetch(`https://dummyjson.com/products/${pid}`)
            const res = await data.json();
            const prod = await res;
            setproductDetail(prod);

         }
         catch (error) {
            console.log(error);
         }
      } else {
         alert("id not found");
      }
   }
  

   useEffect(() => {
   ProductApi(router.query.ProductDetail);
      
   }, [router.query.ProductDetail])

   return (<>
      <div className="productcard bg-zinc-200 h-96 w-60 rounded-md shadow-lg p-2 mx-auto mt-10">
        <img className="h-24 w-42 rounded-md ml-10" src={productDetail.thumbnail} alt="product_img" />
        <p className="text-center font-bold text-orange-300 mt-1">Price-{productDetail?.price}</p>
        <p className="text-center font-bold text-sky-600">rating-{productDetail.rating}</p>
        <p className="text-center font-bold text-lime-600 mt-1">stock-{productDetail.stock}</p>
        <p className="text-center break-all">description-{productDetail.description}</p>
        
    </div>

   </>)
}
export default ProductDetail;