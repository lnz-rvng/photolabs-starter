import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const {
    toggleModal,
    selectedPhoto,
    favoritedPhotos,
    setFavoritedPhotos,
    toggleFavorite,
    toggleDarkMode,
    state
  } = props;

  const { id, location, similar_photos, urls, user } = selectedPhoto;
  const isFavorited = favoritedPhotos.includes(selectedPhoto);
  const dark = (state.isDarkMode ? "dark" : '')

  return (
    <div className={`photo-details-modal ${dark}`}>
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          onClick={() => {
            toggleFavorite(selectedPhoto, isFavorited);
          }}
          isFavorited={isFavorited}
        />
        <img
          src={urls.full}
          alt="larger display photo"
          className="photo-details-modal__image"
        />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={user.profile}
            alt="profile picture"
          />

          <div className="photo-details-modal__photographer-info">
            <span>{user.name}</span>
            <br />
            <span className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </span>
          </div>
        </div>
      </div>

      <div>
        <header className="photo-details-modal__header">
          <span>Similar Photos</span>
        </header>

        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(similar_photos)}
            favoritedPhotos={favoritedPhotos}
            setFavoritedPhotos={setFavoritedPhotos}
            toggleFavorite={toggleFavorite}
            state={state}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
