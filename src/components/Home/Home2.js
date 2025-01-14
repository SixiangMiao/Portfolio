import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a full stack developer for almost 6 years,
              which helps me to have a deep understanding
              <br/>
              of front end and back end frameworks and related tools and tech stacks
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, Typescript, Python, C++ and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  front-end and back-end.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I am ready to share my enthusiasm with my teammates and ready to
              <br />
              learn from them
              <b className="purple"></b>
              {/*<i>*/}
              {/*  <b className="purple">*/}
              {/*    {" "}*/}
              {/*    Modern Javascript Library and Frameworks*/}
              {/*  </b>*/}
              {/*</i>*/}
              {/*&nbsp; like*/}
              {/*<i>*/}
              {/*  <b className="purple"> React.js and Next.js</b>*/}
              {/*</i>*/}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/*<Row>*/}
        {/*  <Col md={12} className="home-about-social">*/}
        {/*    <h1>FIND ME ON</h1>*/}
        {/*    <p>*/}
        {/*      Feel free to <span className="purple">connect </span>with me*/}
        {/*    </p>*/}
        {/*    <ul className="home-about-social-links">*/}
        {/*      <li className="social-icons">*/}
        {/*        <a*/}
        {/*          href="https://github.com/SixiangMiao"*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="icon-colour  home-social-icons"*/}
        {/*        >*/}
        {/*          <AiFillGithub />*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*      <li className="social-icons">*/}
        {/*        <a*/}
        {/*          href="https://twitter.com/HeiChun13"*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="icon-colour  home-social-icons"*/}
        {/*        >*/}
        {/*          <AiOutlineTwitter />*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*      <li className="social-icons">*/}
        {/*        <a*/}
        {/*          href="https://www.linkedin.com/in/sixiang-miao-0968ab231/"*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="icon-colour  home-social-icons"*/}
        {/*        >*/}
        {/*          <FaLinkedinIn />*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*      /!*<li className="social-icons">*!/*/}
        {/*      /!*  <a*!/*/}
        {/*      /!*    href="https://www.instagram.com/soumyajit4419"*!/*/}
        {/*      /!*    target="_blank"*!/*/}
        {/*      /!*    rel="noreferrer"*!/*/}
        {/*      /!*    className="icon-colour home-social-icons"*!/*/}
        {/*      /!*  >*!/*/}
        {/*      /!*    <AiFillInstagram />*!/*/}
        {/*      /!*  </a>*!/*/}
        {/*      /!*</li>*!/*/}
        {/*    </ul>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Container>
    </Container>
  );
}
export default Home2;
