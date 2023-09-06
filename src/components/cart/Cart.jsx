import React, { useEffect } from 'react'
import './Cart.css'
import { ProductContext } from '../Context/ProductContextProvider'
import { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { NavLink } from 'react-router-dom'
const Cart = () => {
    const { countCart } = useContext(ProductContext)

    return (
        <div className='cart'>
            <div className='cart_number'>{countCart}</div>
            <NavLink className="cart_header" to={'cart-detail'}><LiaShoppingBagSolid /></NavLink>
        </div >
    )
}

export default Cart
