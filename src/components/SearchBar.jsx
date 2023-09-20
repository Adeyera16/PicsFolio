import React from 'react'

const SearchBar = () => {
  return (
    <div className='text-center my-[2rem]'>

        <input type="text" placeholder='search by color,man,woman or animal' className='mx-4 w-full md:w-[25rem] outline-none border-2 border-gray-400 p-2 rounded-md' />
    </div>
  )
}

export default SearchBar