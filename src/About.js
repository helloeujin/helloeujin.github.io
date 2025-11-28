import "./css/About.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        I create data visualizations at{" "}
        <a
          href="https://www.straitstimes.com/authors/youjin-shin"
          target="_blank"
        >
          The Straits Times
        </a>{" "}
        and run a studio called{" "}
        <a href="https://visual-plot.com/" target="_blank">
          VisualPlot
        </a>
        . Until recently, I was a graphics reporter at{" "}
        <a
          href="https://www.washingtonpost.com/people/youjin-shin/"
          target="_blank"
        >
          The Washington Post
        </a>
        , where I worked on a wide range of stories, including developing
        coronavirus trackers and creating a color palette for both company
        branding and data visualization.
        <br />
        <br /> Before joining the Post, I worked as a multimedia editor at{" "}
        <a href="https://www.wsj.com/" target="_blank">
          The Wall Street Journal
        </a>{" "}
        and as a research fellow specializing in data visualization at{" "}
        <a href="http://senseable.mit.edu/" target="_blank">
          the MIT SENSEable City Lab
        </a>
        , where I worked on various urban planning projects.
        <br />
        <br />I graduated from{" "}
        <a href="http://itp.nyu.edu/itp/" target="_blank">
          the Interactive Telecommunications Program (ITP)
        </a>{" "}
        at New York University. Prior to that, I studied Mechanical Engineering
        at Korea University and developed a road detection algorithm for a
        surveillance robot.
        <br />
        <br />
        You can reach me by email at{" "}
        <span style={{ fontStyle: "italic", color: "blue" }}>
          hello@visual-plot.com
        </span>
        .
      </div>
    </>
  );
};

export default About;
