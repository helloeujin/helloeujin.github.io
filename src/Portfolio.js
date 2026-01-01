import React, { useState, useEffect } from "react";
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setClickedIndex((state) => ({
  //       ...state,
  //       0: !state[0],
  //     }));
  //   }, 2400);

  //   return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  // }, []);

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
              <div className="hed" onClick={handleClick(index)}>
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
