import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string; // Add videoUrl prop
  
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageUrl, videoUrl}) => {
  const [showVideo, setShowVideo] = useState(false); // State to manage video visibility
  // const navigate = useNavigate();
  const handleCardClick = () => {
    setShowVideo(!showVideo); // Toggle video visibility
  };

  return (
    <div onClick={handleCardClick} className='transform hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-pointer'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      {showVideo && (
        <div className="mt-4">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
