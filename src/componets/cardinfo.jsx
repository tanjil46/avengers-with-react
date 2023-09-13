export default function Card({card}){
      const {image,name}=card


 return(
           
        <div className="flex p-4 items-center gap-2 bg-yellow-500 my-4 rounded-xl">
            <img className="w-[90px]" src={image}></img>
     <p className="text-xl text-white">{name}</p>
    </div>
   
 )



}