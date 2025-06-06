import About from "./About";
import "./css/App.scss";
import Footer from "./Footer";
import More from "./More";
import Portfolio from "./Portfolio";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <div className="intro-text">
        Hello! I'm <span>Youjin Shin</span>.
        {/* <br /> I design, code and write for data visualization ✨ */}
        {/* <br /> I love data visualization ✨ */}
        <br />I design, code and write✨
      </div>

      <Portfolio />

      <About />

      <More />

      <Footer />
    </>
  );
}

export default App;
