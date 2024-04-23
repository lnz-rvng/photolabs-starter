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
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="profile picture"
        />
        <div className="photo-list__user-info">
          <span>{username}</span>
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
