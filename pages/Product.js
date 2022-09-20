import React, { useEffect, useState } from "react";
// import ProductDetail from "./blog/ProductDetail";
import Loader from "./component/Loader";
import Productcard from "./component/Productcard";



const Product = () => {
    const [loading,setLoading] = useState(false);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        ProductApi();
    },[]);
    const ProductApi = () => {
        setLoading(true);
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {setProduct(json.products)
              setLoading(false);
            });
    }

    return (<>
       {
        loading ? <Loader/>: ""
       }
    <div className="grid grid-cols-5 gap-2 m-4">
   
    {
        product.map((pro) =>{
            return(<> <div key={pro.id}> <Productcard data={pro} /> </div></>)
        })
    }
    </div>
    </>)
};
export default Product;