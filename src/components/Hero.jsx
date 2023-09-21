import React from 'react'
import background from '../assets/background.jpg';

const Hero = () => {
  return (
    <div className='mt-[5rem]  h-screen'
    style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${background})`,
        width: '100%',
        backgroundSize: 'cover',
    }}>
        <div className='flex flex-col justify-center w-[30rem] h-full p-[2rem]'>
         <h1 className='gradient__text font-bold text-3xl'>PicsFolio</h1>
         <p className=' text-white  text-md py-5'>PicsFolio is an image gallery website that showcases a variety of images. One of its standout features is the drag-and-drop functionality, allowing you to effortlessly rearrange images to your liking. Enjoy your exploration!</p>
         <button className=' bg-white text-black p-2 rounded-md w-[8rem]'>Go to Gallery</button>
        </div>
    </div>
  )
}

export default Hero