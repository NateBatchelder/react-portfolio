import React from "react";

function Projects(props) {
  const { projects = [] } = props;
  return (
    <main>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <li key={project.title}>
          <h3>{project.title}</h3>
          <br></br>
          <div className="container">
            <img src={require(`../../assets/small${project.image}`)} alt="image of portfolio project"></img>
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
              <span>Source code</span>
            </a>
          </p>
        </li>
      ))}
    </main>
  );
}

export default Projects;
