import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, fetchPhotosByTopic, ...state } = props;
  const dark = (state.isDarkMode ? "dark" : '')
  return (
    <div className={`topic-list__item ${dark}`}>
      <span className="topic-item"
        onClick={() => {
          fetchPhotosByTopic(props.id);
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
