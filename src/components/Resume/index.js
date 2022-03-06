import React from "react";

function Resume() {
  return (
    <body>
      <section>
        <article>
          <div className="row my-1 mx-3">
            <div className="col-md-12">
              <h1>
                <a
                  href={require("../../assets/resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  You can download my resume here
                </a>
              </h1>
            </div>
          </div>
        </article>
        <article>
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
        </article>

        <iframe
          title="resume"
          src={require("../../assets/resume.pdf")}
          style={{ width: "10", height: "10" }}
        ></iframe>
      </section>
    </body>
  );
}

export default Resume;
