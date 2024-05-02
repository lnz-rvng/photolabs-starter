import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import DarkModeButton from "./DarkModeButton";

const TopNavigation = (props) => {
  const { topics, favoritedPhotos, fetchPhotosByTopic, toggleDarkMode, ...state } =
    props;
  const dark = state.isDarkMode ? "dark" : "";
  return (
    <div className={`top-nav-bar ${dark}`}>
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
        state={state}
      />
      <div className="icons">
        <div className="heart">
          <FavBadge
            isFavPhotoExist={favoritedPhotos.length > 0}
          />
        </div>
        <div className="dark-mode">
          <DarkModeButton toggleDarkMode={toggleDarkMode} state={state} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
