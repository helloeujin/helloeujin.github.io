import { useState } from "react";
import "./css/More.scss";

const More = () => {
  const honorsData = require("./data/honors.json");
  const teachingData = require("./data/teaching.json");

  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  return (
    <div className="more">
      {/* SKILLS */}
      <div className="moreHed" onClick={handleClick(0)}>
        Skills{" "}
        <span className={clickedIndex[0] ? "rotateArrow arrow" : "arrow"}>
          &#x2192;
        </span>
      </div>
      <div
        className={
          clickedIndex[0]
            ? "moreDesc moreDescMore showSkills"
            : "moreDesc moreDescMore"
        }
      >
        <div className="descHed">
          <ul>
            <li>
              Front-end dev: <span className="tags">JavsCript</span>
              <span className="tags">CSS</span>
              <span className="tags">Sass</span>{" "}
              <span className="tags">React</span>
            </li>
            <li>
              Data Visualization: <span className="tags">D3.js</span>
              <span className="tags">Three.js</span>
              <span className="tags">p5.js</span>
            </li>
            <li>
              Data Analysis: <span className="tags">Python</span>
            </li>
            <li>
              Design: <span className="tags">Figma</span>
              <span className="tags">Illustrator</span>
            </li>
            <li>
              Mobile dev: <span className="tags">React Native</span>
            </li>
          </ul>
        </div>
      </div>

      {/* HONORS */}
      <div className="moreHed" onClick={handleClick(1)}>
        Honors{" "}
        <span className={clickedIndex[1] ? "rotateArrow arrow" : "arrow"}>
          &#x2192;
        </span>
      </div>
      <div className={clickedIndex[1] ? "moreDesc  showHonors" : "moreDesc "}>
        {" "}
        {honorsData.map((honor, index) => {
          return (
            <div className="honor" key={"honor" + index}>
              <span className="date">{honor.date} </span>
              {honor.org}, {honor.award}
              {honor.story ? (
                <span className="story">, {honor.story}</span>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* TALKS */}
      <div className="moreHed" onClick={handleClick(2)}>
        Talks & Teaching{" "}
        <span className={clickedIndex[2] ? "rotateArrow arrow" : "arrow"}>
          &#x2192;
        </span>
      </div>
      <div className={clickedIndex[2] ? "moreDesc  showTeaching" : "moreDesc "}>
        {" "}
        {teachingData.map((teaching, index) => {
          return (
            <div className="honor" key={"teaching" + index}>
              <span className="date">{teaching.date} </span>
              {teaching.school}
              {teaching.desc ? (
                <span className="story">, {teaching.desc}</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
