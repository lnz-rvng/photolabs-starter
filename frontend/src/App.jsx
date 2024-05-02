import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    toggleModal,
    setSelectedPhoto,
    setFavoritedPhotos,
    selectedPhoto,
    favoritedPhotos,
    modal,
    handlePhotoClick,
    toggleFavorite,
    photos,
    topics,
    fetchPhotosByTopic,
    toggleDarkMode,
    ...state
  } = useApplicationData();

  const dark = (state.isDarkMode ? "dark" : '')
  return (
    <div className={`App ${dark}`}>
      <HomeRoute
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        handlePhotoClick={handlePhotoClick}
        toggleFavorite={toggleFavorite}
        photos={photos}
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
        state={state}
        toggleDarkMode={toggleDarkMode}
      />

      {modal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          selectedPhoto={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          toggleFavorite={toggleFavorite}
          state={state}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default App;
