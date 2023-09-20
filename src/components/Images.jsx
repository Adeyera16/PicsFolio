import React, { useState } from 'react';
import data from '../data';

const DraggableImage = ({ id, image, tag, handleDragStart }) => {
  return (
    <div
      id={id}
      draggable={true}
      onDragStart={handleDragStart}
      style={{
        cursor: 'move',
        marginBottom: '1rem',
      }}
    >
      <img src={image} alt={tag} className='w-[15rem] h-[15rem] object-cover' />
    </div>
  );
};

const DroppableZone = ({ handleDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropEvent = (e) => {
    e.preventDefault();
    handleDrop(e);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDropEvent}
      style={{
        border: '2px dashed #ccc',
        minHeight: '15rem',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      Drop Zone
    </div>
  );
};

const Images = () => {
  const [imageOrder, setImageOrder] = useState(data.map(item => item.id));

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDrop = (e) => {
    const draggedElementId = e.dataTransfer.getData('text/plain');
    const draggedElementIndex = imageOrder.findIndex(id => id === draggedElementId);
    const targetElementIndex = Number(e.target.id);

    if (draggedElementIndex !== -1 && targetElementIndex !== -1) {
      const newOrder = [...imageOrder];
      [newOrder[draggedElementIndex], newOrder[targetElementIndex]] = [newOrder[targetElementIndex], newOrder[draggedElementIndex]];
      setImageOrder(newOrder);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-[#3d85d4] px-[2rem]'>Images</h1>
      <div className='grid md:grid-cols-4 justify-center p-[2rem] mb-6'>
        {imageOrder.map((id, index) => {
          const item = data.find(item => item.id === id);
          return (
            <DraggableImage
              key={id}
              id={index}
              image={item.image}
              tag={item.tag}
              handleDragStart={handleDragStart}
            />
          );
        })}
      </div>
      <DroppableZone handleDrop={handleDrop} />
    </div>
  );
};

export default Images;

