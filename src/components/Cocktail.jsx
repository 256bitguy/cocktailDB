import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addItem } from '../features/CartReducer';


const Cocktail = ({image,name,id,info,glass}) => {
  const dispatch = useDispatch();
  const cartProduct = {
     cartId:id,
    image:image,
    title:name,
    glass:glass,
     
    
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
   
   };
  return (
    <article className='cocktail'>
     <div className='img-container'>
      <img src={image} alt={name}/>
     </div>
     <div className='cocktail-footer'>
     <h3>{name}</h3>
     <h4>{glass}</h4>
     <p>{info}</p>
     <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>Details</Link>
     <button className='btn' onClick={addToCart} style={{margin:"10px"}}> add to cart</button>
     </div>
    </article>
  )
}

export default Cocktail
