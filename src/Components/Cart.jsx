import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { RiDeleteBack2Fill, RiDeleteBin6Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';


const Cart = ({carts,setCarts}) => {

    const handleSetCarts = () => {
        setCarts([])
    }
    
    const handleDelete = (item) => {
      const filteredArr = carts.filter(ar => ar.id !== item.id)
       setCarts(filteredArr)
       toast.warning("item remove from cart",{autoClose: 2000,})
    }

    const totalPrice = carts.reduce((sum,item) => sum + item.price,0)
 return (
   carts.length === 0 ? <div className='w-full md:w-9/12 mx-auto py-20 flex flex-col items-center ' > <GiShoppingCart className=' text-5xl'></GiShoppingCart> <p className='text-3xl font-bold'>Cart is empty</p> </div>  : <> <div className='w-full md:w-9/12 mx-auto py-20 space-y-6 '>
            {carts.map(cart => <div key={cart.id} className='border border-gray-300 p-4 rounded-lg bg-gray-100 flex items-center space-x-6'>
                <img className='w-30 h-25' src={cart.image} alt='image'></img>
                <div className='w-190'>
                    <h2 className='text-2xl font-bold'>{cart.title}</h2>
                    <p> {cart.description} </p>
                </div>
               <h2 className='text-2xl font-bold'>${cart.price} <br></br> /month</h2> 
               <RiDeleteBin6Fill onClick={()=>handleDelete(cart)} className='text-2xl text-red-500'></RiDeleteBin6Fill>
            </div>
        )}
            <div className='bg-black rounded-xl p-10 flex justify-between items-center text-white'>
                <h2 className='text-3xl font-semibold'>Total</h2>
                <p  className='text-3xl font-semibold'> {totalPrice}$</p>
             </div>
           <button onClick={handleSetCarts} className='bg-red-600 w-full p-3 text-2xl rounded-md text-white'> Procced To Checkout
            </button> 
        </div> </> 
       
    )
   
};

export default Cart;