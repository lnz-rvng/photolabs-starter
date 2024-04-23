import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;
  const mappedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <TopicListItem title={topic.title} />
      </div>
    );
  });
  return (
    <div className="top-nav-bar__topic-list">
      {mappedTopics}
    </div>
  );
};

export default TopicList;
