import { useState } from "react";

function useApplicationData() {
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    id: undefined,
    location: undefined,
    similar_photos: undefined,
    urls: undefined,
    user: undefined
  });
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  const handlePhotoClick = (data) => {
    setSelectedPhoto(data);
    toggleModal();
  };

  const toggleFavorite = (id, isFavorited) => {
    if (!isFavorited) {
      // this will add the photo to the array
      setFavoritedPhotos([...favoritedPhotos, id]);
    } else {
      // if a photo is already favorited, this code will remove it from the list/array
      setFavoritedPhotos(favoritedPhotos.filter((photoId) => photoId !== id));
    }
  };

  return {
    toggleModal,
    setSelectedPhoto,
    setFavoritedPhotos,
    selectedPhoto,
    favoritedPhotos,
    modal,
    handlePhotoClick,
    toggleFavorite
  };
}

export default useApplicationData;
