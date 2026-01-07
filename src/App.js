import About from "./About";
import "./css/App.scss";
import Footer from "./Footer";
import More from "./More";
import Portfolio from "./Portfolio";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function App() {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <div className="intro-text">
        <span class="name">Hello! I'm Youjin Shin.</span>
        <br /> I design, code and tell stories with data.
        {/* <span class="name">Youjin Shin</span> <br />I design, code and tell
        stories with data */}
      </div>

      <Portfolio />

      <About />

      <More />

      <Footer />
    </>
  );
}

export default App;
