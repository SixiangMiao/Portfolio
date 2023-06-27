import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is Simon Miao. I'm currently a senior full stack developer with <span className="purple">around 6 years </span> of experience developing
            professional web applications using frameworks and tech stacks such as <span className="purple">Angular, Typescript, Html5, CSS/SASS, and Angular Material. </span>
            <br/>
            In addition to my front-end experience, I also have experience with backend development, databases, and CICD pipelines.
            I have worked using <span className="purple">JavaScript and Express</span> to build useful RESTful APIs. I'm familiar with databases like <span className="purple">MySQL, Reddis and MongoDB</span>,
            and setting up testing using <span className="purple">Karma and Jasmine</span>.
            {/*Hi Everyone, I am <span className="purple">Soumyajit Behera </span>*/}
            {/*from <span className="purple"> Bhubaneswar, India.</span>*/}
            {/*<br /> I am a final year student pursuing an Integrated MSc (IMSc)*/}
            {/*in Maths and Computing at BIT Mesra.*/}
            {/*<br />*/}
            {/*Additionally, I am currently employed as a software developer at*/}
            {/*Juspay.*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*Apart from coding, some other activities that I love to do!*/}
          </p>
          {/*<ul>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Playing Games*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Writing Tech Blogs*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Travelling*/}
          {/*  </li>*/}
          {/*</ul>*/}

          {/*<p style={{ color: "rgb(155 126 172)" }}>*/}
          {/*  "Strive to build things that make a difference!"{" "}*/}
          {/*</p>*/}
          {/*<footer className="blockquote-footer">Soumyajit</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
