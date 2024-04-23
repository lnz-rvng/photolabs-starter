import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const mappedSampleDataForTopicList = sampleDataForTopicList.map((topic) => {
  return (
    <div key={topic.id}>
      <TopicListItem title={topic.title} />
    </div>
  );
});
const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {mappedSampleDataForTopicList}
    </div>
  );
};

export default TopicList;
