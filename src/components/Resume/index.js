import React from "react";

export default function Resume() {
  return (
    <div className="section row my-1 mx-4">
      <span className="gutter col-sm-12 col-md-3"></span>
      <div className="section-cta card mt-1 col-sm-12 col-md-10">
        <div className="resume card-panel pt-1">
          <a
            href={require("../../assets/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <p>
            I'm currently completing an Full Stack Web Development Bootcamp at
            the University of California, Berkeley.
            <br />
            What you wont find on my resume is that I enjoy learning new things
            and am facinated with design and engineering especially when it
            comes products that appear to excede the grasp of those who created
            the solutions.
            <br />I see that learning to create content in the world of web
            development as an extension of engineering solutions in a physical
            dimension. I hope to be able to contribute to solutions that have
            proven difficult in the absense of the internet and digital
            technology.
          </p>
          <iframe
            title="resume"
            src={require("../../assets/resume.pdf")}
            style={{ width: "90%", height: "75%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
