import React from 'react'
 
import { useSelector } from 'react-redux';
const Cart = () => {
  // const { orderTotal } = useSelector((state) => state.cartState);
  const cartItems = useSelector((state) => state.cartState.cartItems);
console.log( cartItems)
  return (
    <div>
        <section className='section'>
    <h2 className='section-title'>Cocktails</h2>
    <div className='cocktails-center' >
    {cartItems.map((item)=>{
        return(
          <article className='cocktail'>
     <div className='img-container'>
      <img src={item.image} alt={item.name}/>
     </div>
     <div className='cocktail-footer'>
     <h3>{item.name}</h3>
     <h4>{item.glass}</h4>
     <p>{item.info}</p>
       </div>
    </article>
         
               
        )
      })}
     </div> 
   </section>
       
    
    </div>
  )
}

export default Cart