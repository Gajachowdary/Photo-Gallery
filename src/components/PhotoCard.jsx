import React from 'react';

const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex items-center justify-between bg-gradient-to-t from-white via-white to-transparent">
        <div className="flex flex-col truncate pr-2">
          <span className="text-sm font-semibold text-gray-900 truncate">
            {photo.author}
          </span>
          <span className="text-xs text-gray-500">
            ID: {photo.id}
          </span>
        </div>
        <button
          onClick={() => onToggleFavourite(photo)}
          className={`shrink-0 p-2 rounded-full transition-all duration-300 focus:outline-none ${
            isFavourite 
              ? 'bg-rose-50 text-rose-500 hover:bg-rose-100' 
              : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
          }`}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isFavourite ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`w-6 h-6 transition-transform duration-300 ${isFavourite ? 'scale-110' : 'scale-100'}`}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default React.memo(PhotoCard);
