import React from "react";

import "./App.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";


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
     <HomeRoute />
    </div>
  );
};

export default App;
