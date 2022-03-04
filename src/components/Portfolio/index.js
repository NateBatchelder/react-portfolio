import React from 'react';
import PastWork from '../PastWork';

function Portfolio() {
  const pastwork = [
    {
      title: "Password Generator",
      image: " ",
      description: " ",
      deployment: "https://natebatchelder.github.io/passwordGenerator/",
    },
    {
      title: "Note-Taker",
      image: " ",
      description: " ",
      deployment: " ",
    },
    {
      title: "Note-Taker",
      image: " ",
      description: " ",
      deployment: " ",
    },
    {
      title: "Note-Taker",
      image: " ",
      description: " ",
      deployment: " ",
    },
    {
      title: "Note-Taker",
      image: " ",
      description: " ",
      deployment: " ",
    },
  ];

  return (
    <div>
      <PastWork projects={pastwork} />
    </div>
  );
}


export default Portfolio;
