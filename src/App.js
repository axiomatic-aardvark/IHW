import React from "react";
import TrackVisibility from "react-on-screen";
import Home from "./components/Home";
import MetalGallery from "./components/MetalGallery";
import PaintingGallery from "./components/PaintingGallery";
import ContactMe from "./components/ContactMe";
import GlobalState from "./components/globalState"

function App() {
  return (
    <div className="app">
      <GlobalState>
        <Home />
        <TrackVisibility
          once
          partialVisibility={true}
          offset={-300}
          className="track-visibility"
        >
          <MetalGallery />
        </TrackVisibility>
        {/* <TrackVisibility
          once
          partialVisibility={true}
          offset={-300}
          className="track-visibility"
        >
          <PaintingGallery />
        </TrackVisibility> */}
        <ContactMe />
      </GlobalState>
    </div>
  );
}

export default App;
