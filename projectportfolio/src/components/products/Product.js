import React from "react";
import axios from "axios";
import { useEffect , useState } from 'react';
function Product()
{
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(res=>{console.log(setData(res.data))})
        .catch(err=>{console.log(err)});
    },[]);
    
    return(
        <div>
            <div className="row">
            {

                
data.length!==0&&data.map((item,index)=>{
    return (
        
            <div key={index} className="item">
                    
                 <Product data={item}/>
             </div>
        
    );
})
}
            </div>
        </div>
    )
}
export default Product;