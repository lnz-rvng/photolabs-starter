import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
function HomeRoute() {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
}

export default HomeRoute;
