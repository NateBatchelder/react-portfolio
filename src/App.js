import React, { useState } from "react";
import './App.css';
import About from "./components/About";
import Header from "./components/Header";
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
        <Header
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Header>
      </div>
      <div>{sectionSelection()}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
