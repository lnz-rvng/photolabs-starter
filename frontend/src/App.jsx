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
    handleFavoriteClick,
    handlePhotoClick,
    setIsFavorited,
    toggleFavorite,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        modal={modal}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        handlePhotoClick={handlePhotoClick}
        handleFavoriteClick={handleFavoriteClick}
        setIsFavorited={setIsFavorited}
        toggleFavorite={toggleFavorite}
      />

      {modal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          selectedPhoto={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          handleFavoriteClick={handleFavoriteClick}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
