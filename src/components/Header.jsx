import React, { useCallback } from 'react';

const Header = ({ searchTerm, onSearchChange }) => {
  const handleInputChange = useCallback(
    (e) => {
      onSearchChange(e.target.value);
    },
    [onSearchChange]
  );

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
          P
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          Photo<span className="text-rose-500">Gallery</span>
        </h1>
      </div>
      <div className="relative w-full md:w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by author..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all duration-300 sm:text-sm shadow-inner"
        />
      </div>
    </header>
  );
};
export default React.memo(Header);
