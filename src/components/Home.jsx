import React from "react";
import { Form, Link } from "react-router-dom";
import Course from "./Course";
import hero from "./hero-img.jpg";
import student from "./student.png";
import light from "./lightning.png";
import experience from "./experience.png";
import about from "./about.png";
import Footer from "./Footer";
import Header from "../Header";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <main className="cover">
          <div className="main-left">
            <h1>About Mathematics</h1>
            <p>
              Mathematics is an area of knowledge that includes the topics of
              numbers, formulas and related structures, shapes and the spaces in
              which they are contained, and quantities and their changes. These
              topics are represented in modern mathematics with the major
              subdisciplines of number theory,[1] algebra,[2] geometry,[1] and
              analysis,[3][4] respectively. There is no general consensus among
              mathematicians about a common definition for their academic
              discipline.
            </p>
            <p className="math2">
              Most mathematical activity involves the discovery of properties of
              abstract objects and the use of pure reason to prove them. These
              objects consist of either abstractions from nature or—in modern
              mathematics—entities that are stipulated to have certain
              properties, called axioms. A proof consists of a succession of
              applications of deductive rules to already established results.
              These results include previously proved theorems, axioms, and—in
              case of abstraction from nature—some basic properties that are
              considered true starting points of the theory under
              consideration.[5]
            </p>
            <p className="math3">
              Mathematics is essential in the natural sciences, engineering,
              medicine, finance, computer science and the social sciences.
              Although mathematics is extensively used for modeling phenomena,
              the fundamental truths of mathematics are independent from any
              scientific experimentation. Some areas of mathematics, such as
              statistics and game theory, are developed in close correlation
              with their applications and are often grouped under applied
              mathematics. Other areas are developed independently from any
              application (and are therefore called pure mathematics), but often
              later find practical applications.[6][7] The problem of integer.
            </p>
          </div>
          <div className="main-line"></div>
          <div className="main-right">
            <img className="hero-img" src={hero} alt="" />
          </div>
        </main>
      </main>
      <section>
        <Course
          img={student}
          title="Students"
          about="If you want to know about our students, click on the button below"
        ></Course>
        <Course
          img={light}
          title="Target"
          about="If you want to know about our target, click on the button below"
        ></Course>
        <Course
          img={experience}
          title="Our plans"
          about="If you want to know about our plans, click on the button below"
        ></Course>
        <Course
          img={about}
          title="About us"
          about="If you want to know about us, click on the button below"
        ></Course>
      </section>

      {/* here footer */}
      <Footer />
    </div>
  );
};

export default Home;
