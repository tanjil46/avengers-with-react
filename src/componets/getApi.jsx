import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useState } from "react"
import Directors from "./director";

export default function Getapi({showCardHandler}){

const [avengers,setAvengers]=useState([])

useEffect(()=>{

fetch('data.json')
.then(res=>res.json())
.then(data=>setAvengers(data));
},[])




return(
    <div className="">
       
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                
        
                 {
                    avengers.map((director,idx)=><Directors showCardHandler={showCardHandler} director={director} key={idx}></Directors>)
                 }

      
         </div>

    </div>
)






}

Getapi.propTypes={
    showCardHandler:PropTypes.func
}