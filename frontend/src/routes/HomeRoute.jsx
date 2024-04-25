import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
function HomeRoute(props) {
  const { photos, topics, toggleModal, setSelectedPhoto, favoritedPhotos, setFavoritedPhotos} = props;
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritedPhotos={favoritedPhotos} />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
}

export default HomeRoute;
