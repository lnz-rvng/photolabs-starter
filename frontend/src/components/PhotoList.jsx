import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos} = props;
  const mappedPhotos = photos.map((photo) => {
    return (
      <div key={photo.id}>
        <PhotoListItem data={photo} />
      </div>
    );
  });
  return (
    <div className="photo-list">
      {mappedPhotos}
    </div>
  );
};

export default PhotoList;
