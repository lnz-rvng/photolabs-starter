import React from "react";
import PhotoList from "components/PhotoList";

function LikedPhotos(props) {
  const { photos, setFavoritedPhotos } = props;
  return (
    <div>
      <h1>LIKED PHOTOS</h1>
      <PhotoList photos={photos} setFavoritedPhotos={setFavoritedPhotos}/>
    </div>
  );
}

export default LikedPhotos;
