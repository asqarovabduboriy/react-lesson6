import React from 'react'
import './Endcard.css'
import { footer_Card } from '../Static/Static';

function Endcard() {

    let cards = footer_Card?.map((el)=>(
        <div className='footer_card' key={el.id}>
        <img src={el.img} alt="" />
        <div>
           <p>{el.title}</p>
           <span>{el.discription}</span>
        </div>
   </div>
    ))
    
    return(
        <>
          <div className='container'>
            
            <div className='footer_card_flex'>
                   {cards}
            </div>
            
          </div>
        </>
    )
    
}

export default Endcard;