import React from 'react'
import "./index.scss"
import {useDispatch, useSelector} from 'react-redux'
import { deleteItem } from '../../redux/actions/cardActions'



const Cart = () => {
  const cart = useSelector((store) => store.cardData.card)
  const dispatch = useDispatch()
  return (
    <div className='card-holders'>
      {cart.map((item) => {
        return <div className="card" key={item.id}>
          <div className="card-image-holder"><img src={item.image} alt="" /></div>
          <div className="card-desc">
            <h2>{item.title}</h2>
            <p>{item.description.length > 300 ? `${item.description.substring(0, 200)}...` : item.description}</p>
            <span>{item.price}$</span>
          </div>
          <div className="card-action">
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete Product</button>
          </div>
        </div>;
      })}
    </div>
  )
}

export default Cart