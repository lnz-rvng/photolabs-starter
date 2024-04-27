import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (photoId) => photoId !== action.payload.id
        ),
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modal: true,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}

function useApplicationData() {
  const initialState = {
    modal: false,
    selectedPhoto: {
      id: undefined,
      location: undefined,
      similar_photos: undefined,
      urls: undefined,
      user: undefined,
    },
    favoritedPhotos: [],
    photos: [],
    topics: [],
  };

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos").then((res) => {
      console.log(res);
    });
  }, []);

  const toggleModal = () => {
    if (!state.modal) {
      dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
    } else {
      dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
    }
  };

  const handlePhotoClick = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: data } });
    toggleModal();
  };

  const toggleFavorite = (id, isFavorited) => {
    if (!isFavorited) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    }
  };

  return {
    toggleModal,
    handlePhotoClick,
    toggleFavorite,
    ...state, // Spread the state to expose the state values
  };
}

export default useApplicationData;
