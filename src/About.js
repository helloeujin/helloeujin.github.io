import "./css/About.scss";

const About = () => {
  return (
    <>
      <div className="about">
        I design, code and write for creating data visualization and visual
        storytelling. Until recently, I was a graphics reporter at{" "}
        <a
          href="https://www.washingtonpost.com/people/youjin-shin/"
          target="_blank"
        >
          the Washington Post
        </a>{" "}
        worked on a wide range of stories including coronavirus trackers and
        created a color palette for graphics.
        <br />
        <br /> Before joining the Post, I worked as a multimedia editor at{" "}
        <a href="https://www.wsj.com/" target="_blank">
          the Wall Street Journal
        </a>{" "}
        and a research fellow specializing in data visualization at{" "}
        <a href="http://senseable.mit.edu/" target="_blank">
          the MIT SENSEable city lab
        </a>{" "}
        working on various urban planning projects.
        <br />
        <br />I graduated from{" "}
        <a href="http://itp.nyu.edu/itp/" target="_blank">
          the Interactive Telecommunications Program (ITP)
        </a>{" "}
        at New York University. Prior to that, I studied Mechanical Engineering
        at Korea University and developed a road detection algorithm for a
        surveilance robot.
        <br />
        <br />
        You can reach me by email at{" "}
        <span style={{ fontStyle: "italic" }}>meggonagul at gmail dot com</span>
        .
      </div>
    </>
  );
};

export default About;
