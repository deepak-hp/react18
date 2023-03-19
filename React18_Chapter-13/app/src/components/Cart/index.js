import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../utils/cartSlice';
import FoodItemCard from '../FoodItemCard'

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items) || [];
    handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1 className='font-bold text-3xl'>
                Cart - {cartItems.length}
                <button className='bg-green-100 p-2 m-2' onClick={handleClearCart}>Clear Cart</button>
            </h1>
            <div className='flex'>
                {cartItems.length ? cartItems.map((item => <FoodItemCard key={item.id} restaurant={item} />)) : null}
            </div>

        </div>
    )
}

export default Cart