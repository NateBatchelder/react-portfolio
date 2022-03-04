import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";


// import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "A collection of my projects.  I have worked on a variety of projects, from simple websites to full-stack applications.",
    },
    {
      name: "Resume",
      description:
        "A highlighted look at some of my past academic and relevant work experiences",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
              <ContactForm></ContactForm>            
        )}
      </main>
      <footer class="footer">
        <p>
          Completed as part of the University of California Berkeley Full Stack
          Web Development Bootcamp
        </p>
        <h3>
        <p>
          You can find my current and past over on
          <a href="https://github.com/natebatchelder"> GitHub</a>
        </p>
        <p>
          And if you'd like to connect professionaly, you will find resources on
          <a href="https://www.linkedin.com/in/natebatchelder/"> LinkedIn</a>
        </p>
        </h3>
      </footer>
    </div>
  );
}

export default App;
