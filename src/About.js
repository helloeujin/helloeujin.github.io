import "./css/About.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        I create data-driven stories and interactive experiences at{" "}
        <a
          href="https://www.straitstimes.com/authors/youjin-shin"
          target="_blank"
        >
          The Straits Times
        </a>
        , and run{" "}
        <a href="https://visual-plot.com/" target="_blank">
          VisualPlot
        </a>
        , a studio specializing in data visualization and visual storytelling.
        <br />
        <br />
        Previously, I was a graphics reporter at{" "}
        <a
          href="https://www.washingtonpost.com/people/youjin-shin/"
          target="_blank"
        >
          The Washington Post
        </a>
        , where I built interactive stories, developed coronavirus trackers, and
        contributed to the company’s data visualization and branding color
        system. Before that, I worked at{" "}
        <a href="https://www.wsj.com/" target="_blank">
          The Wall Street Journal
        </a>{" "}
        and the{" "}
        <a href="http://senseable.mit.edu/" target="_blank">
          MIT SENSEable City Lab
        </a>
        , creating data visualizations for journalism and urban research.
        <br />
        <br />I studied Mechanical Engineering and Robotics Engineering at Korea
        University before earning a master’s degree from NYU’s{" "}
        <a href="http://itp.nyu.edu/itp/" target="_blank">
          Interactive Telecommunications Program (ITP)
        </a>
        .
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
