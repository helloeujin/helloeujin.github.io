import { useEffect, useRef } from "react";
import Matter from "matter-js";
import data from "./data/data.json";

const Footer = () => {
  const keywordsRef = useRef(null);

  useEffect(() => {
    const container = keywordsRef.current;
    if (!container) return undefined;

    const { Engine, Runner, Bodies, Composite, Events } = Matter;
    let stopPhysics;

    const startPhysics = () => {
      const engine = Engine.create();
      const runner = Runner.create();
      const width = container.clientWidth;
      const height = container.clientHeight;
      const tagElements = [...container.querySelectorAll(".keyword-tag")];

      const walls = [
        Bodies.rectangle(width / 2, height + 22, width, 50, {
          isStatic: true,
        }),
        Bodies.rectangle(-22, height / 2, 50, height * 2, {
          isStatic: true,
        }),
        Bodies.rectangle(width + 22, height / 2, 50, height * 2, {
          isStatic: true,
        }),
      ];

      const tagBodies = tagElements.map((element, index) => {
        const tagWidth = element.offsetWidth;
        const tagHeight = element.offsetHeight;
        const columns = Math.max(1, Math.floor(width / 180));
        const column = index % columns;
        const x = ((column + 0.5) * width) / columns;
        const y = -tagHeight - Math.floor(index / columns) * 55;

        element.style.opacity = 1;

        return Bodies.rectangle(x, y, tagWidth, tagHeight, {
          chamfer: { radius: tagHeight / 2 },
          restitution: 0.45,
          friction: 0.3,
        });
      });

      Composite.add(engine.world, [...walls, ...tagBodies]);

      const syncTags = () => {
        tagBodies.forEach((body, index) => {
          const element = tagElements[index];
          element.style.transform = `translate(${body.position.x}px, ${body.position.y}px) translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
      };

      Events.on(engine, "afterUpdate", syncTags);
      Runner.run(runner, engine);

      stopPhysics = () => {
        Events.off(engine, "afterUpdate", syncTags);
        Runner.stop(runner);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPhysics();
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (stopPhysics) stopPhysics();
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer-social">
        <div className="social">
          <a href="https://www.linkedin.com/in/youjins/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="social">
          <a href="https://twitter.com/helloeujin" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/youjin.info" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-keywords" ref={keywordsRef}>
        {data.map((project) => (
          <a
            className="keyword-tag"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={project.hed}
          >
            {project.keyword}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
