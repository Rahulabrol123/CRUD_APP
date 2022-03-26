import React,{useState,useEffect} from 'react';

import '../App.css';

const data=require('../products.json');

const ProductList=(props)=>{
  
    const {data}=props
  
    return(
        <div className='container'>
             {data.length>0 ? data.map((d,i)=>
            <div className='list' key={i}>
               <div className='details'>
               <h1 className='title'>
                  
                   {d.title}

                </h1>
                <h3>
                    {d.description}
                </h3>
                <h2>
                   Category: {d.category}
                </h2>
                   </div>
              
            
            </div>
        ): <h1>no data</h1>}
        </div>
       


        
    )
}

export default ProductList;