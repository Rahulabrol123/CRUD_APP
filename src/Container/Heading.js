import React from 'react';
import './heading.css';

const Heading = (props) => {

    const changeState=()=>{
        props.setPostState(true)
        props.setGetState(false)
        props.setFilter(false)
    }

    return (


        <div className="header">
            <a href="#default" className="logo">Rahul</a>
            <div className="header-right">

                {props.postState == false ?
                <>
                    <a className='active' onClick={() => changeState()}>POST</a> 
                    <a onClick={() => props.setGetState(true)}>Get</a></>:
                    <a className='active' onClick={() => props.setPostState(false)}>Home</a>}
               

            </div>
        </div>
    )
}
export default Heading;