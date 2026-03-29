import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCrad = ({model,carts,setCarts}) => {

    const [isSubscribed,setIsSubscribed] = useState(false)
    const handleSubscription = () => {
       setIsSubscribed(true)
       setCarts([...carts,model])
       toast.success('Item added to cart',{autoClose: 3000})
    }
    return (
        <div className="card bg-base-100 w-full md:w-90 border-zinc-900 shadow-sm flex-1 space-y-5">
  <figure>
     <div className=' flex justify-center   h-50 p-3 bg-gray-200 w-full'>
    <img className='w-40 h-40 '
      src={model.image}
      alt="Shoes" />
     </div>
  </figure>
  <div className="card-body">
    <h2 className="card-title flex flex-row justify-between text-2xl">
      {model.title}
      <div className="badge bg-red-500 text-white"> {model.status} </div>
    </h2>
    <p> {model.description} </p>
     <h2 className='text-2xl font-bold'>${model.price}/month</h2>  
     <button onClick={handleSubscription} className='btn bg-sky-400 text-lg w-full'>
        {isSubscribed ? 'Subscribe' : 'Subscribe Now'}
     </button>

  </div>
</div>


    );
};

export default ModelCrad;