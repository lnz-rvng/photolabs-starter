import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data } = props;
  const mappedData = data.map((item) => {
    console.log(item)
    const { id, slug, title } = item;
    return (
      <div key={id} className="topic-list__item">
        <span>{title}</span>
      </div>
    );
  });
  return <>{mappedData}</>;
};

export default TopicListItem;
