import React, { useState, useRef } from 'react';
import data from '../data';
import SearchBar from './SearchBar';

const Images = () => {
  const [imageData, setImageData] = useState(data);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef();

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    setDraggedIndex(index);

    const dragItem = e.target;
    dragItem.style.zIndex = '999';
    dragItem.style.transform = 'scale(1.05)';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index !== draggedIndex) {
      const newImageData = [...imageData];
      const [draggedItem] = newImageData.splice(draggedIndex, 1);
      newImageData.splice(index, 0, draggedItem);
      setImageData(newImageData);
      setDraggedIndex(index);

      setTimeout(() => {
        const container = containerRef.current;
        container.style.transform = `translate(0, 0)`;
        container.style.transition = 'transform 0.3s ease-in-out';
      }, 0);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);

    const container = containerRef.current;
    container.style.transform = '';
    container.style.transition = '';

    const dragItem = container.querySelector('.dragging');
    if (dragItem) {
      dragItem.style.zIndex = '';
      dragItem.style.transform = '';
    }
  };

  const handleTouchStart = (e, index) => {
    e.preventDefault(); // Prevent default touch behavior (like scrolling)

    const mouseEvent = new MouseEvent('mousedown', {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY,
    });
    handleDragStart(mouseEvent, index);
  };

  const handleTouchMove = (e, index) => {
    e.preventDefault(); // Prevent default touch behavior (like scrolling)

    const mouseEvent = new MouseEvent('mousemove', {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY,
    });
    handleDragOver(mouseEvent, index);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault(); // Prevent default touch behavior (like scrolling)

    handleDragEnd();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredImages = imageData.filter(item =>
    item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='mt-[5rem]'>
      <h1 className='gradient__text font-bold text-3xl text-center'>Gallery</h1>
      <p className='text-center'>These images are grouped into four categories, you can only search an image by typing color, man, woman or nature.</p>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className='grid justify-center md:grid-cols-4 p-[3rem] image-container' ref={containerRef}>
        {filteredImages.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            onTouchStart={(e) => handleTouchStart(e, index)}
            onTouchMove={(e) => handleTouchMove(e, index)}
            onTouchEnd={handleTouchEnd}
            className={`mb-6 cursor-grab ${index === draggedIndex ? 'dragging' : ''}`}
          >
            <img
              src={item.image}
              alt={item.tag}
              className='w-[15rem] h-[15rem] object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
