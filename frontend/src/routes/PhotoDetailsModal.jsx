import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { modal, toggleModal, selectedPhoto } = props;
  const { id, location, similar_photo, urls, user } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {console.log(selectedPhoto)}
    </div>
  );
};

export default PhotoDetailsModal;
