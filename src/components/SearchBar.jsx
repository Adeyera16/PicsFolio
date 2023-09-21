import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className='text-center mt-[1rem]'>
      <input
        type="text"
        placeholder='search by color, man, woman or nature'
        className='mx-4 w-full md:w-[25rem] outline-none border-2 border-gray-400 p-2 rounded-md'
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
