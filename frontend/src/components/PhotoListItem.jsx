import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { data, favoritedPhotos, handlePhotoClick, toggleFavorite } = props;
  const { id, location, urls, user } = data;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;

  const isFavorited = favoritedPhotos.includes(id);

  return (
    <div key={id} className="photo-list__item">
      <PhotoFavButton
        onClick={() => {
          toggleFavorite(id, isFavorited);
        }}
        isFavorited={isFavorited}
      />
      <img
        className="photo-list__image"
        src={regular}
        alt="display photo"
        onClick={() => {
          handlePhotoClick(data);
        }}
      />
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
