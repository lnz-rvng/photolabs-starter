import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;
  const mappedTopics = topics.map((topic) => {
    return <TopicListItem key={topic.id} title={topic.title} />;
  });

  return <div className="top-nav-bar__topic-list">{mappedTopics}</div>;
};

export default TopicList;
