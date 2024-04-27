import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, fetchPhotosByTopic } = props;
  return (
    <div className="topic-list__item">
      <span onClick={() => {fetchPhotosByTopic(props.id)}}>{title}</span>
    </div>
  );
};

export default TopicListItem;
