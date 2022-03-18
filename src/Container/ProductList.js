import React,{useState,useEffect} from 'react';
import Product from './product';
import '../App.css';

const data=require('../products.json');

const ProductList=(props)=>{
  
    const {data}=props
  
    return(
        <div className='container'>
             {data.length>0 ? data.map((d,i)=>
            <div className='list' >
               <div className='details'>
               <h1>
                  hello
                   {d.name}

                </h1>
                <h2>
                    ${d.price}
                </h2>
                   </div>
              
            
            </div>
        ): <h1>no data</h1>}
        </div>
       


        
    )
}

export default ProductList;