import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
  DARK_MODE_ON: "DARK_MODE_ON",
  DARK_MODE_OFF: "DARK_MODE_OFF",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (photoData) => photoData!== action.payload
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
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photos: action.payload,
      };
    case ACTIONS.DARK_MODE_ON:
      return {
        ...state,
        isDarkMode: true,
      };
    case ACTIONS.DARK_MODE_OFF:
      return {
        ...state,
        isDarkMode: false,
      };

    default:
      return state;
  }
}

function useApplicationData() {
  const initialState = {
    modal: false,
    isDarkMode: false,
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
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((err) => console.log(err));
  }, []);

  const fetchPhotosByTopic = (id) => {
    fetch(`http://localhost:8001/api/topics/photos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
      });
  };

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

  const toggleFavorite = (data, isFavorited) => {
    if (!isFavorited) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload:  data  });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: data  });
    }
  };

  const toggleDarkMode = () => {
    if (!state.isDarkMode) {
      dispatch({ type: ACTIONS.DARK_MODE_ON });
    } else {
      dispatch({ type: ACTIONS.DARK_MODE_OFF });
    }
  };

  return {
    toggleModal,
    handlePhotoClick,
    toggleFavorite,
    fetchPhotosByTopic,
    toggleDarkMode,
    ...state, // Spread the state to expose the state values
  };
}

export default useApplicationData;
