import React,{useState,useEffect} from 'react';
import ProductList from './ProductList';
import '../App.css';
import Post from './Post';

const data=require('../products.json');

const ProductContainer=()=>{

    

    const [shop,setShop]=useState([])
    const [post,setPost]=useState()

    useEffect(()=>{
        setShop(data);
        setPost(false);

        fetch("http://mi-linux.wlv.ac.uk/~2032521/rahul/api/blogs")
        .then((resp)=>resp.json()).then((resp)=>setShop(resp))
    },[])
    return(
        <div>
            <div className='header'>
            <button>Home</button>
            <button onClick={()=>setPost(true)}>Post</button>
            </div>
           
             
            {post==false?<ProductList data={shop} />:
            <Post/>}
        </div>
    )
}

export default ProductContainer;