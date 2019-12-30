import React from "react";
import TrackVisibility from "react-on-screen";
import Home from "./components/Home";
import MetalGallery from "./components/MetalGallery";
import PaintingGallery from "./components/PaintingGallery";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className="app">
      <Home />
      <TrackVisibility
        once
        partialVisibility={true}
        offset={-300}
        className="track-visibility"
      >
        <MetalGallery />
      </TrackVisibility>
      <TrackVisibility
        once
        partialVisibility={true}
        offset={-300}
        className="track-visibility"
      >
        <PaintingGallery />
      </TrackVisibility>
      <MoreInfo />
    </div>
  );
}

export default App;
