import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        modal={modal}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />

      {modal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          selectedPhoto={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
        />
      )}
    </div>
  );
};

export default App;
