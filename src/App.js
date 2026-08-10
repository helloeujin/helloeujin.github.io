import About from "./About";
import "./css/App.scss";
import Footer from "./Footer";
import More from "./More";
import Portfolio from "./Portfolio";
import ReactGA from "react-ga";
import { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Matter from "matter-js";
import data from "./data/data.json";

const IntroKeywordAnimation = () => {
  const tagRef = useRef(null);

  useEffect(() => {
    const tag = tagRef.current;
    const name = document.querySelector(".intro-text .name");
    const latestProject = document.querySelector(
      ".project:first-child .project-content"
    );

    if (!tag || !name || !latestProject) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tag.style.display = "none";
      return undefined;
    }

    const startAnimation = () => {
      const { Engine, Runner, Bodies, Body, Composite, Events } = Matter;
      const nameRect = name.getBoundingClientRect();
      const projectRect = latestProject.getBoundingClientRect();
      const tagRect = tag.getBoundingClientRect();
      const nameX = nameRect.left + nameRect.width * 0.72;
      const projectX = projectRect.left + projectRect.width / 2;
      const engine = Engine.create();
      const runner = Runner.create();

      engine.gravity.y = 0.65;

      const tagBody = Bodies.rectangle(
        nameX,
        -tagRect.height,
        tagRect.width,
        tagRect.height,
        {
          label: "intro-keyword",
          chamfer: { radius: tagRect.height / 2 },
          restitution: 0.5,
          friction: 0.2,
          frictionAir: 0.012,
        }
      );
      const namePlatform = Bodies.rectangle(
        nameX,
        nameRect.top + 4,
        nameRect.width * 0.55,
        8,
        { isStatic: true, label: "name-platform" }
      );
      const projectPlatform = Bodies.rectangle(
        projectX,
        projectRect.top + 4,
        projectRect.width,
        8,
        { isStatic: true, label: "project-platform" }
      );

      tag.style.visibility = "visible";
      Composite.add(engine.world, [tagBody, namePlatform, projectPlatform]);

      let phase = 0;
      let nameHighlightTimer;
      const handleCollision = (event) => {
        event.pairs.forEach(({ bodyA, bodyB }) => {
          const labels = [bodyA.label, bodyB.label];

          if (
            phase === 0 &&
            labels.includes("intro-keyword") &&
            labels.includes("name-platform")
          ) {
            phase = 1;
            Composite.remove(engine.world, namePlatform);
            name.classList.add("impact-highlight");
            nameHighlightTimer = setTimeout(() => {
              name.classList.remove("impact-highlight");
            }, 700);
            Body.setVelocity(tagBody, {
              x: (projectX - tagBody.position.x) / 95,
              y: -6.5,
            });
            Body.setAngularVelocity(tagBody, 0.025);
          } else if (
            phase === 1 &&
            labels.includes("intro-keyword") &&
            labels.includes("project-platform")
          ) {
            phase = 2;
            Composite.remove(engine.world, projectPlatform);
            window.dispatchEvent(new Event("portfolio:open-latest"));
            Body.setVelocity(tagBody, { x: -10, y: -6.5 });
            Body.setAngularVelocity(tagBody, -0.05);
          }
        });
      };

      const syncTag = () => {
        tag.style.transform = `translate(${tagBody.position.x}px, ${tagBody.position.y}px) translate(-50%, -50%) rotate(${tagBody.angle}rad)`;

        if (phase === 2 && tagBody.position.x < -tagRect.width) {
          tag.style.visibility = "hidden";
        }
      };

      Events.on(engine, "collisionStart", handleCollision);
      Events.on(engine, "afterUpdate", syncTag);
      Runner.run(runner, engine);

      return () => {
        clearTimeout(nameHighlightTimer);
        name.classList.remove("impact-highlight");
        Events.off(engine, "collisionStart", handleCollision);
        Events.off(engine, "afterUpdate", syncTag);
        Runner.stop(runner);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    };

    let stopAnimation;
    const frame = requestAnimationFrame(() => {
      stopAnimation = startAnimation();
    });

    return () => {
      cancelAnimationFrame(frame);
      if (stopAnimation) stopAnimation();
    };
  }, []);

  return (
    <div className="intro-keyword-tag" ref={tagRef} aria-hidden="true">
      {data[0].keyword}
    </div>
  );
};

function App() {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <div className="intro-text">
        <span className="name">Hello! I'm Youjin Shin.</span>
        <br /> I design, code and tell stories with data.
        {/* <br /> I turn data into interactive stories. */}
      </div>

      <IntroKeywordAnimation />

      <Portfolio />

      <About />

      <More />

      <Footer />
    </>
  );
}

export default App;
