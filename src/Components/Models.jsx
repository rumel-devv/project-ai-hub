import React, { use } from 'react';
import ModelCrad from './ModelCrad';

const Models = ({modelPromise,carts,setCarts}) => {
    const models = use(modelPromise)
    // console.log(models);
    return (
        <div className='w-full md:w-9/12 mx-auto py-20 space-y-6'>
           <div className='text-center space-y-2' >
            <h2 className='text-2xl md:text-5xl font-bold'>Choose Your AI Model</h2>
            <p className='text-md'>One subscription gives you access to all frontier AI models</p>
          </div>
           

           {/* Mappint models */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3'>
          {models.map(model  =>  <ModelCrad carts={carts} setCarts={setCarts} model={model} key={model.id} ></ModelCrad>)}
          
          </div>


       </div>
    );
};

export default Models;