import React from "react";
import myImage from "../assets/mypicture.jpeg";
import "./About.css";

const About = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">About</h2>
      <div className="about__grid">
        {/* <div> */}
        <img className="myImage__about" src={myImage} alt="Antonio Souza" />

        <p className="about__text">
          My initial contact with programming was in 2003 during my first year
          of University under the subject Algorithms and Programming (C). This
          subject triggered my interest in IT and I decided that I would major
          in Telecommunication and Information Technology.
        </p>
        <br />
        <p className="about__text">
          In 2007, upon graduation, I started my career as a Electrical Engineer
          working for a Metallurgical Company where I had the opportunity to
          lead different projects improving plant efficiency and reducing
          operational costs.
        </p>
        <br />
        <p className="about__text">
          In 2010, I decided to move to Australia to improve my English skills
          and, since then, I have been working in different areas. Initially, I
          worked as a Project Coordinator for a Demolition Company for 6 years.
          In this role, I managed over 50 employees on different projects.
        </p>
        <br />
        <p className="about__text">
          For the past 5 years, I have been running my own business supplying
          safety equipment to construction companies here in Australia. Xtreme
          Safety is a wordPress e-commerce store with API integration with all
          major Marketplaces here in Australia (Catch, Mydeal, Kogan, Amazon and
          Ebay).
        </p>
        <br />

        <p className="about__text">
          I have moved to the Sunchine Coast in October 2022 and I am currently
          working as a Front End Developer for The Thrive Project which is a
          purpose-driven social enterprise dedicated to promoting the
          long-lasting well-being and &#39;thrivability&#39; of all people. I
          really love what I do and I am seeking a full time opportunity to
          apply my analytical and technical abilities as a developer. I'm
          dedicated to continuous learning and I am keen to enhance my skills to
          be able to excel my role. I am an Australian Citizen and I am ready to
          commence work immediately, on-site, hybrid or remotely as per
          requirements of the job.
        </p>
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
