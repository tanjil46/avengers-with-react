
import PropTypes from 'prop-types';
import Card from './cardinfo';
export default function Showactors({cards,costs,remainig}){

  
    console.log(cards)




 return(
    <div className="">
          <p>Total Cost:{costs}</p>
          <h1>Remaing Balance:{remainig}</h1>

         {
            cards.map((card,idx)=><Card card={card} key={idx}></Card>)
         }

      




    </div>
 )




}

Showactors.propTypes={
    cards:PropTypes.array

}