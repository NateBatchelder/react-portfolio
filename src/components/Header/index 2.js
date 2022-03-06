import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header className="flex-row px-1" id="navbar">
      <div>
        <a href="./">
          <h1>React Portfolio</h1>
        </a>
      </div>
      <div className="nav">
        <Nav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
      </div>
    </header>
  );
}

export default Header;
