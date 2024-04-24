import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
function HomeRoute(props) {
  const { photos, topics } = props;
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritedPhotos={favoritedPhotos}/>
      <PhotoList photos={photos} favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos}/>
    </div>
  );
}

export default HomeRoute;
