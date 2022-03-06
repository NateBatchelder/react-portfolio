import React from "react";
import Nav from "./Nav";

function Header (props) {
  const { currentCategory, setCurrentCategory } = props;
  
  return (
    <header className="flex-row px-1" id="navbar">
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
