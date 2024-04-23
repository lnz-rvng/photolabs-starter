import React from "react";

import "./App.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";


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
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
