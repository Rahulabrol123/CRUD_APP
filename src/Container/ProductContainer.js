import React,{useState,useEffect} from 'react';
import ProductList from './ProductList';
import '../App.css';

const data=require('../products.json');

const ProductContainer=()=>{

    const [shop,setShop]=useState([])

    useEffect(()=>{
        setShop(data)
    })
    return(
        <div>
            <div className='header'>
            <h1>my shop</h1>
            </div>
           
             
            <ProductList data={shop} />
        </div>
    )
}

export default ProductContainer;