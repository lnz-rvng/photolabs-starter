import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "components/PhotoList";
import TopicListItem from "components/TopicListItem";
import TopicList from "components/TopicList";


// const photos = new Array(3).fill(null)

// const mappedPhotos = photos.map((_, index) => {
//   return (
//     <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
//   )
// });
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
  <div className="App">
    {/* {mappedPhotos} */}
    <TopicList/>
    <PhotoList/>
    </div>
  )
};

export default App;