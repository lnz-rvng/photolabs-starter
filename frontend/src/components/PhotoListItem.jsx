import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { data, favoritedPhotos, setFavoritedPhotos } = props;
  const { id, location, urls, user } = data;
  const { city, country } = location;
  const { full, regular } = urls;
  const { username, name, profile } = user;

  const isFavorited = favoritedPhotos.includes(id)
  console.log(`isFavorited: ${isFavorited} favoritedPhotos: ${favoritedPhotos}`)
  const toggleFavorite = () => {
    if (!isFavorited) {
      // this will add the photo to the array
      setFavoritedPhotos([...favoritedPhotos, id])
    } else {
      // if a photo is already favorited, this code will remove it from the list/array
      setFavoritedPhotos(favoritedPhotos.filter(photoId => photoId !== id));
    }
  }
  return (
    <div key={id} className="photo-list__item">
      <PhotoFavButton onClick={toggleFavorite} isFavorited={isFavorited}/>
      <img className="photo-list__image" src={full} alt="display photo" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="profile picture"
        />
        <div className="photo-list__user-info">
          <span>{name}</span>
          <br />
          <span className="photo-list__user-location">
            {city}, {country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
