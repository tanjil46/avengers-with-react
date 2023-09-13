

import PropTypes from 'prop-types';

export default function Directors({director,showCardHandler}){


 const {image,name,role,salary}=director



 


return(
    <div className="">

    <div  className="text-center lg:w-[300px] bg-slate-600 p-4 my-5 space-y-8 rounded-md ">
      <img className='w-[70px] mx-auto rounded-full' src={image}></img>
      <h1 className='text-xl font-bold text-white '>{name}</h1>
       <div className="flex gap-4 justify-center">
        <p className='text-xl font-bold text-white'>Salary:{salary}</p>
        <h2 className='text-xl font-bold text-white'>{role}</h2>
       </div>
        <div className="">
<button onClick={()=>showCardHandler(director)} className="bg-blue-600 py-3 px-4 rounded-xl font-bold text-yellow-400">Select</button>
        </div>


    </div>





    </div>
)






}

Directors.propTypes={
    director:PropTypes.object.isRequired,
    showCardHandler:PropTypes.func
}