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
        Hello! I'm <span class="name">Youjin Shin</span>.
        {/* <br /> I design, code and write for data visualization ✨ */}
        {/* <br /> I love data visualization ✨ */}
        <br /> I{" "}
        {/* <RoughNotation
          type="underline"
          color="rgba(0, 0, 255, 0.4)"
          strokeWidth="3.2"
          show={true}
          animationDuration="1200"
          padding="130"
        > */}
        design and code
        {/* </RoughNotation>{" "} */}
        with{" "}
        <div class="intro-data">
          {/* <RoughNotation
            type={"highlight"}
            color="rgba(0, 0, 255, .48)"
            strokeWidth="3.2"
            show={true}
            animationDuration="1200"
          > */}
          data
          {/* </RoughNotation> */}
        </div>
      </div>

      <Portfolio />

      <About />

      <More />

      <Footer />
    </>
  );
}

export default App;
