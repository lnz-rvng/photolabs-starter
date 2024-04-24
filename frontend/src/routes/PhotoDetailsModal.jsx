import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { modal, toggleModal, photos } = props;
 
  const mappedPhotos = photos.map((photo) => {
    const { id, location, urls, user } = photo;
    const { city, country } = location;
    const { full, regular } = urls;
    const { username, name, profile } = user;
    return <div key={id}>{console.log(photo)}</div>;
  });
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {mappedPhotos}
    </div>
  );
};

export default PhotoDetailsModal;
