import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { imageSource, profile, username, locationCity, locationCountry, id } =
    props;
  /* Insert React */
  return (
    <div>
      <img src={imageSource} alt="display photo" />
      <img src={profile} alt="profile picture" />
      <p>{username}</p>
      <p>
        {locationCity}, {locationCountry}
      </p>
    </div>
  );
};

export default PhotoListItem;
