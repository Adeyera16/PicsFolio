import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center p-5 text-[#111827]'>
        <div className='flex'>
            <FaFacebook className=' ml-6'/>
            <FaInstagram className=' ml-6'/>
            <FaTwitter className=' ml-6'/>
            <FaYoutube className='ml-6'/>
        </div>
        <div>
            <ul className='flex py-2 text-sm md:text-md'>
                <li className='ml-4 md:ml-8'>Conditions Of Use</li>
                <li className='ml-4 md:ml-8'>Privacy & Policy</li>
                <li className='ml-4 md:ml-8'>Press Room</li>
            </ul>
        </div>
        <p className='text-sm text-[#6B7280]'>&copy; 2023 PicsFolio by Adeyera Asimolowo</p>
    </footer>
  )
}

export default Footer