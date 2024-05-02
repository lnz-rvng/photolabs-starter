import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
function HomeRoute(props) {
  const {
    photos,
    topics,
    toggleModal,
    setSelectedPhoto,
    favoritedPhotos,
    setFavoritedPhotos,
    handlePhotoClick,
    toggleFavorite,
    fetchPhotosByTopic,
    toggleDarkMode,
    ...state
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        toggleDarkMode={toggleDarkMode}
        state={state}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        handlePhotoClick={handlePhotoClick}
        toggleFavorite={toggleFavorite}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
    </div>
  );
}

export default HomeRoute;
