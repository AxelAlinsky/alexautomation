// Import React from 'react'
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

// Functional component 'Card' with props of type 'CardProps'
const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black">
      <img className="w-full" src={imageUrl} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
