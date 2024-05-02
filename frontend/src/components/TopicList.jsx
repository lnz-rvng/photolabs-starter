import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, fetchPhotosByTopic, ...state } = props;
  const mappedTopics = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        title={topic.title}
        fetchPhotosByTopic={fetchPhotosByTopic}
        id={topic.id}
        state={state}
      />
    );
  });
  const dark = (state.isDarkMode ? "dark" : '')
  return <div className={`top-nav-bar__topic-list ${dark}`}>{mappedTopics}</div>;
};

export default TopicList;
