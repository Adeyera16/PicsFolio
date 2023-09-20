import React from 'react';
import data from '../data';

const Images = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-[#3d85d4] px-[2rem]'>Images</h1>
        <div className='grid md:grid-cols-4 justify-center p-[2rem]'>
            {data.map((item) => (
                <div key={item.id} className='mb-[1rem]'>
                    <img src={item.image} alt={item.tag} className='w-[15rem] h-[15rem] object-cover' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Images