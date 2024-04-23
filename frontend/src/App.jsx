import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from '../src/mocks/photos'
import topics from '../src/mocks/topics'


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
     <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
