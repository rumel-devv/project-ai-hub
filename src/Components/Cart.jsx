import React from 'react';
import { RiDeleteBack2Fill, RiDeleteBin6Fill } from 'react-icons/ri';

const Cart = ({carts}) => {
    
    return (
        <div className='w-full md:w-9/12 mx-auto py-20 space-y-6 '>
            {carts.map(cart => <div className='border border-gray-300 p-4 rounded-lg bg-gray-100 flex items-center space-x-6'>
                <img className='w-30 h-25' src={cart.image} alt='image'></img>
                <div className='w-190'>
                    <h2 className='text-2xl font-bold'>{cart.title}</h2>
                    <p> {cart.description} </p>
                </div>
               <h2 className='text-2xl font-bold'>${cart.price} <br></br> /month</h2> 
               <RiDeleteBin6Fill className='text-2xl text-red-600'></RiDeleteBin6Fill>
            </div>)}
        </div>
    );
};

export default Cart;