import React from "react";
import TrackVisibility from "react-on-screen";
import Home from "./components/Home";
import MetalGallery from "./components/MetalGallery";
import PaintingGallery from "./components/PaintingGallery";
import ContactMe from "./components/ContactMe";
import GlobalState from "./components/globalState";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };

    this.resize = this.resize.bind(this);
  }

  resize() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
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
            <MetalGallery width={this.state.width} />
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
}
