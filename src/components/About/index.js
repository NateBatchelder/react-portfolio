import React from 'react';
// import nsbHeadshot from '../../assets/images/schoolphoto.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Nate Batchelder</h1>
      {/* <img src={nsbHeadshot} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
          I am a current student learning web development with an emphasis on the MERN stack.  I enjoy working on projects that seek to address an unmet need or provide an opertunity to help people accomplish more with the help of technology.
          <br />
          <br />
          Please reachout to me if you have any questions or would like to work together.
        </p>
      </div>
    </section>
  );
}

export default About;
