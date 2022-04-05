import React,{useState} from 'react';
import { Badge } from 'react-bootstrap';
import Get from './Container/Get';
import Heading from './Container/Heading';
import Post from './Container/Post';
import './Home.css';
import Image from 'react-bootstrap/Image'


const invest=require('./img/invest.jpeg')



const Home = () => {
   const [postState,setPostState]=useState(false);
   const [getState,setGetState]=useState(false);
   const [filter,setFilter]=useState(false);
   const [allcolor,setAllColor]=useState('secondary');
   const [stockcolor,setStockColor]=useState('secondary')
   const [cryptocolor,setCryptoColor]=useState('secondary')
   const [option,setOption]=useState();

   const filterBlog=()=>{

    setFilter(true);
    setAllColor('primary')
    setCryptoColor('secondary');
    setStockColor('secondary');
    setOption('all');
   }


   const filterCryptoBlog=()=>{
       setCryptoColor('primary')
       setAllColor('secondary')
       setStockColor('secondary')
       setOption('crypto');
       setFilter(true);

   }
   const filterStockBlog=()=>{
       setStockColor('primary')
       setAllColor('secondary')
       setCryptoColor('secondary')
       setOption('stock');
       setFilter(true);

   }
    return (
        <div className='home'>
            <Heading setPostState={setPostState} postState={postState} 
            setGetState={setGetState} getState={getState}
            setFilter={setFilter}/>
            {postState==false ? <div className='body'>
                <p> Investing ensures present and future long-term financial security. 
                    The money generated from your investments can provide financial security and income.</p>
                <Image src={invest}
                className='image' />
              
            </div>: <Post />}
            <div>
                
  {postState==true ?  null:
  <div className='badge'>
      
  <Badge pill  style={{fontSize: 16}} bg={cryptocolor} onClick={()=>filterCryptoBlog()} >
    Crypto
  </Badge>{' '}
  <Badge pill bg={stockcolor} style={{fontSize: 16}} onClick={()=>filterStockBlog()}>
    Stock
  </Badge>{' '}

  <Badge pill bg={allcolor} style={{fontSize: 16}} onClick={()=>filterBlog()} >
    All
  </Badge>{' '}
  </div>}
  
</div>
           {filter==true ?  <Get option={option}/>: null}

        </div>
    )
}

export default Home;