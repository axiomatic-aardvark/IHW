import React from "react";
import TrackVisibility from "react-on-screen";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import MoreInfo from "./components/MoreInfo";
import ContactMe from "./components/ContactMe";

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
        <Gallery />
      </TrackVisibility>
      <MoreInfo />
      <ContactMe />
    </div>
  );
}

export default App;
