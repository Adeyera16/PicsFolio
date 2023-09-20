import React from 'react'

const NavBar = () => {
  return (
    <div className='flex p-[1rem] fixed top-0 w-full justify-between items-center bg-white'>
        <div>
            <h1 className='text-[#3d85d4] font-bold text-3xl italic'>PicsFolio</h1>
        </div>
        <div className='flex'>
            <ul className='flex mr-5'>
                <li className='mr-5'>Home</li>
                <li className='mr-5'>Pictures</li>
                <li className='mr-5'>Contact</li>
            </ul>
            <button className='bg-black w-[6rem] text-white rounded-md p-2'>Logout</button>
        </div>
    </div>
  )
}

export default NavBar