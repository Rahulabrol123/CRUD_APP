import React,{useState,useEffect} from 'react';

const data=require('../products.json');

const Product=(props)=>{
  
    const {data}=props
  
    return(
        <div>
           
            <h1>{console.log(data)}</h1>
        </div>
    )
}

export default Product;