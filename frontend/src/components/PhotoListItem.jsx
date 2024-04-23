import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    imageSource,
    profile,
    username,
    location: { city, country },
    id,
  } = props.photo;

  /* Insert React */
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={imageSource}
        alt="display photo"
      />
      <div className="photo-list__user-info">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="profile picture"
        />
        <span className="photo-list__user-details">{username}</span>
        <span className="photo-list__user-location">
          {city}, {country}
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;
