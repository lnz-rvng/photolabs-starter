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
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        handlePhotoClick={handlePhotoClick}
        toggleFavorite={toggleFavorite}
      />

      {modal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          selectedPhoto={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
