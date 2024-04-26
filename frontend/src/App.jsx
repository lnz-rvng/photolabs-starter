import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics";
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
    closePhotoDetails
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
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
          closePhotoDetails={closePhotoDetails}
        />
      )}
    </div>
  );
};

export default App;
