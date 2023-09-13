
import { useState } from 'react'
import './App.css'
import Getapi from './componets/getApi'
import Showactors from './componets/showactors'

function App() {
  
        const [cards,setCards]=useState([])
        const[remainig,setRemaining]=useState(0)
        const[costs,setCost]=useState(0);


        const showCardHandler=(director)=>{
          let count=director.salary;
            const notTwice=cards.find(item=>item.id == director.id);
            if(notTwice){
             return alert("already Booked")
            }
            else{
              const newCards=[...cards,director]
              setCards(newCards);
            
          
             cards.forEach(item=>{
              count=count+item.salary
              setCost(count);
           
             });
             const remaningDollar=20000-count;
              setRemaining(remaningDollar);
              if(count>20000){
              return  alert("boget low")

             }


            }
          
          










        }
      









  return (
    <>
      
          <div className="m-4 flex justify-around  ">

          <Getapi  showCardHandler={showCardHandler}></Getapi>
          <Showactors costs={costs} remainig={remainig}  cards={cards}></Showactors>







          </div>
     



   
    </>
  )
}

export default App
