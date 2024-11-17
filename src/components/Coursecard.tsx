import React from 'react';

interface courseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CourseCard: React.FC<courseCardProps> = ({ title, description, imageUrl }) => {
  return (
    <button className='transform hover:scale-105 hover:shadow-xl transition-all duration-500'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
    </button>
  );
};

export default CourseCard;
