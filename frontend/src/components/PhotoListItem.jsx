import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { data } = props;
  const { id, location, urls, user } = data;
  const { city, country } = location;
  const { full, regular } = urls;
  const { username, name, profile } = user;

  return (
    <div key={id} className="photo-list__item">
      <PhotoFavButton />
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
