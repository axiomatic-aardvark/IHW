import React from "react";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import MoreInfo from "./components/MoreInfo";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="app">
      <Home />
      <Gallery />
      <MoreInfo />
      <ContactMe />
    </div>
  );
}

export default App;
