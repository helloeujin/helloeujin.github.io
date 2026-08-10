import React, { useEffect, useState } from "react";
import "./css/Portfolio.scss";

const Portfolio = () => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  const data = require("./data/data.json");

  useEffect(() => {
    const openLatestProject = () => {
      setClickedIndex((state) => ({ ...state, 0: true }));
    };

    window.addEventListener("portfolio:open-latest", openLatestProject);
    return () => {
      window.removeEventListener("portfolio:open-latest", openLatestProject);
    };
  }, []);

  return (
    <div className="portfolio">
      {data.map((project, index) => {
        return (
          <div className="project" key={"project" + index}>
            <div className="project-content">
              <div className="tag">
                <span className="tag-text">{project.tag}</span>
              </div>

              {/* HED */}
              <div
                className={clickedIndex[index] ? "activeHed hed" : "hed"}
                onClick={handleClick(index)}
              >
                <span>
                  {project.hed}
                  {"  "}
                  <div
                    className={
                      clickedIndex[index] ? "rotateArrow arrow" : "arrow"
                    }
                  >
                    &#x2192;{" "}
                  </div>{" "}
                </span>
              </div>

              {/* DESC */}
              <div className={clickedIndex[index] ? "showDesc desc" : "desc"}>
                {renderHTML(project.desc)}
              </div>

              {/* IMG */}
              <a href={project.url} target="_blank">
                <img src={process.env.PUBLIC_URL + "/" + project.img} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
