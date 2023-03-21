import React from "react";
import myImage from "../assets/mypicture.jpeg";
import "./About.css";

const About = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">About</h2>
      <div className="about__grid">
        <div>
          <p className="about__text">
            My initial contact with programming was in 2003 during my first year
            of University under the subject Algorithms and Programming (C). This
            subject triggered my interest in IT and I decided that I would major
            in Telecommunication and Information Technology.
          </p>
          <br />
          <p className="about__text">
            In 2007, upon graduation, I started my career as a Electrical
            Engineer working for a Metallurgical Company where I had the
            opportunity to lead different projects improving plant efficiency
            and reducing operational costs.
          </p>
          <br />
          <p className="about__text">
            In 2010, I decided to move to Australia to improve my English skills
            and, since then, I have been working in different areas. Initially,
            I worked as a Project Coordinator for a Demolition Company for 6
            years. In this role, I managed over 50 employees on different
            projects.
          </p>
          <br />
          <p className="about__text">
            For the past 5 years, I have been running my own business supplying
            safety equipment to construction companies here in Australia. Xtreme
            Safety is a wordPress e-commerce store with API integration with all
            major Marketplaces here in Australia (Catch, Mydeal, Kogan, Amazon
            and Ebay).
          </p>
          <br />
          <p className="about__text">
            I have moved to the Sunchine Coast in October 2022 and I believe the
            time is now right for me to follow my passion and restart my career
            as a Front End Developer. I bring a strong understanding of HTML,
            CSS, and JavaScript, as well as proficiency in ReactJS, Redux, and
            WordPress development.
          </p>
        </div>
        <div className="myImage__container">
          <img className="myImage__about" src={myImage} alt="Antonio Souza" />
        </div>
      </div>
    </section>
  );
};

export default About;
