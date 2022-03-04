import React from "react";
import img1 from "../../assets/small/PP1.jpeg";
import img2 from "../../assets/small/PP2.jpeg";
import img3 from "../../assets/small/PP3.jpeg";
import img4 from "../../assets/small/PP4.jpeg";
import img5 from "../../assets/small/PP5.jpeg";
import img6 from "../../assets/small/PP6.jpeg";

function Projects(props) {
  const { projects = [] } = props;
  console.log(require(`../../assets/small/${projects[0].image}`).default);

  
  return (
    <main>
      <h1>My Projects</h1>
      {/* why doesn't this function work */}
      {projects.map((project) => (
        <li key={project.title}>
          <h3>{project.title}</h3>
          <br></br>
          <div className="container">
            <img
              src={img1}
              alt="placeholder landing page for the portfolio project"
            ></img>

            <div>{project.description}</div>
          </div>
          <p className="btn">
            <a href={project.deployment} target="_blank" rel="noreferrer">
              {" "}
              <span>View the App</span>
            </a>
          </p>
          <p className="btn">
            <a href={project.repository} target="_blank" rel="noreferrer">
              {" "}
              <span>Source Code</span>
            </a>
          </p>
        </li>
      ))}
    </main>
  );
}

export default Projects;
