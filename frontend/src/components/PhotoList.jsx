import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favoritedPhotos, setFavoritedPhotos, toggleModal } = props;
  const mappedPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        data={photo}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleModal={toggleModal}
      />
    );
  });

  return <div className="photo-list">{mappedPhotos}</div>;
};

export default PhotoList;
