import React from 'react';
import PastWork from '../PastWork';

function Portfolio() {
  const projects = [
    {
      title: "Password Generator",
      image: "PP4.jpeg",
      description:
        "For people who need a new password, this app will generate a random password for you. It will also tell you how many characters your password has.",
      deployment: "https://natebatchelder.github.io/passwordGenerator/",
      repository: "https://natebatchelder.github.io/passwordGenerator/",
    },
    {
      title: "Note-Taker",
      image: "PP1.jpeg",
      description: "Natural Path",
      deployment: "https://github.com/NateBatchelder/Natural-Path",
      repository: "https://natebatchelder.github.io/passwordGenerator/",
    },
    {
      title: "Weather-Dashboard",
      image: "PP3.jpeg",
      description: "Weather Dashboard, for your local and beyond.",
      deployment: "https://github.com/NateBatchelder/Weather-Dashboard.git",
      repository: "https://natebatchelder.github.io/passwordGenerator/",
    },
    {
      title: "Note-Taker",
      image: "PP2.jpeg",
      description: "A refractored version of the HoriSEOn site",
      deployment: "https://github.com/NateBatchelder/horiSEOnRefactor.git",
      repository: "https://natebatchelder.github.io/passwordGenerator/",
    },
    {
      title: "Note-Taker",
      image: "PP6.jpeg",
      description:
        "The first portfolio component I made in the Bootcamp.  'What a long strange trip it's been'",
      deployment: "https://github.com/NateBatchelder/Never-Cease.git",
      repository: "https://natebatchelder.github.io/passwordGenerator/",
    },
  ];

  return (
    <div>
      <PastWork projects={projects} />
    </div>
  );
}


export default Portfolio;
