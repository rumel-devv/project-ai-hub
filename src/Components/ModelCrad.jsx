import React, { useState } from 'react';

const ModelCrad = ({model,carts,setCarts}) => {

    const [isSubscribed,setIsSubscribed] = useState(false)
    const handleSubscription = () => {
       setIsSubscribed(true)
       setCarts([...carts,model])
    }
    return (
        <div className="card bg-base-100 w-90 border-zinc-900 shadow-sm flex-1 space-y-5">
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
      <div className="badge badge-secondary"> {model.status} </div>
    </h2>
    <p> {model.description} </p>
     <h2 className='text-2xl font-bold'>${model.price}/month</h2>  
     <button onClick={handleSubscription} className='btn bg-sky-300 text-lg w-full'>
        {isSubscribed ? 'Subscribe' : 'Subscribe Now'}
     </button>

  </div>
</div>


    );
};

export default ModelCrad;