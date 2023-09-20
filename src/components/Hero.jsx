import React from 'react'
import background from '../assets/background.jpg';

const Hero = () => {
  return (
    <div className='mt-[5rem]  h-screen'
    style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${background})`,
        width: '100%',
        backgroundSize: 'cover',
    }}>
        <div className='flex flex-col justify-center items-center h-full'>
         <h1 className='text-[#3d85d4] italic font-extrabold text-3xl'>PicsFolio</h1>
         <p className='w-[50rem] text-white text-xl text-center p-5'>PicsFolio is an image gallery website that showcases a variety of images. One of its standout features is the drag-and-drop functionality, allowing you to effortlessly rearrange images to your liking. Enjoy your exploration!</p>
        </div>
    </div>
  )
}

export default Hero