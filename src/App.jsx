import React, { useState, useReducer, useMemo, useCallback, useEffect } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favouritesReducer, initialState } from './reducers/favouritesReducer';
import Header from './components/Header';
import Gallery from './components/Gallery';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);

  // Filter photos based on search term using useMemo for performance optimization
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) return photos;
    
    const lowercasedSearch = searchTerm.toLowerCase();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(lowercasedSearch)
    );
  }, [photos, searchTerm]);

  // Sync favourites to local storage when they change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleToggleFavourite = useCallback((photo) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photo });
  }, []);

  const handleSearchChange = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900 selection:bg-rose-200">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <main className="max-w-screen-2xl mx-auto">
        <section className="pt-4 pb-12">
          {searchTerm && !loading && !error && (
            <div className="px-6 md:px-10 mb-2">
              <p className="text-gray-500 text-sm">
                Showing results for <span className="font-semibold text-gray-800">"{searchTerm}"</span> ({filteredPhotos.length})
              </p>
            </div>
          )}
          <Gallery 
            photos={filteredPhotos} 
            loading={loading} 
            error={error} 
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
