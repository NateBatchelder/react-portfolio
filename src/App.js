import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

// import Resume from "./components/Resume";

function App() {
  const [currentCategory, setCurrentCategory] = useState("about");

  const sectionSelection = () => {
    switch (currentCategory) {
      case "about":
        return <About />;
      case "contact":
        return <ContactForm />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <header
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></header>
      </div>
      <div>{sectionSelection()}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
