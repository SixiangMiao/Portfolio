import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nuorder Platform"
              job="Full Stack Developer"
              time="08/2022 - Current"
              description="• Created web app design and helped programe website using Angular 10, Angular Material with
                          HTML5 and CSS3. Worked with various features in Angular framework like data binding, routing, custom pipes, custom
                          directives to meet various customized requirements."
              description2="• Used Interceptors of HttpClientModule along with UUID token in JWT for authentication and
                          authorization. As well as Designed and developed RESTful APIs using Node.js to build high-performance and scalable backend
                          services. And utilized database using, extended API for databases, MongoDB and Redis."
              description3="• Achieved functionalities that use SMTP(Simple Mail Transfer Protocol) to send weekly emails to
                            retail customers highlighting best sellers, on-hand inventory and promos.
                            Used automated testing tools and frameworks, such as Jasmine, Karma, and Postman for unit testing
                            and integration testing."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cloudbeds Project Management System"
              job="MEAN Stack Developer"
              time="08/2021 - 08/2022"
              description="• Designed and implemented front-end user interfaces using Angular version 9 to present real-time data
                          of day's arrivals, departures, and reservations
                          Worked on UI design using Angular Material, ensuring a smooth and responsive user interface.
                          Utilized project with filters using custom pipes that could help receive an overview of sales and
                          cancellations of property.
                          Implemented authorization and authentication part with guard and JWT to check bearer token users
                          hold."
              description2="• Developed and maintained RESTful APIs using Node.js and Express.js, ensuring efficient and reliable
                            communication between front-end and back-end systems.
                            Established a connection between back-end APIs and front-end interface using Subject from RxJS, as
                            well as some Machine Learning methods to make a prediction of 14-day outlook on client's revenue
                            and occupancy.
                            Extended functionality of back-end by developing custom RESTful API endpoints, allowing seamless
                            integration with external systems and services."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/*<Col md={5} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={editor}*/}
          {/*    isBlog={false}*/}
          {/*    title="Employee Sports Health Management Platform"*/}
          {/*    job="Front-end Software Developer"*/}
          {/*    time="05/2019 - 08/2021"*/}
          {/*    description="• Implemented client-side validations and fetched data using Angular to communicate with RESTful*/}
          {/*                services with JSON Data.*/}
          {/*                Used Angular to make HTML and CSS code interact with TypeScript functions to add dynamism to*/}
          {/*                web pages at client-side."*/}
          {/*    description2="• Developed mobile applications using Angular Ionic framework, enabling cross-platform development*/}
          {/*                  with a single codebase.*/}
          {/*                  Collaborated with UI/UX designers and stakeholders to implement visually appealing and user-friendly*/}
          {/*                  interfaces using Angular Ionic components and styles."*/}
          {/*    // ghLink="https://github.com/soumyajit4419/Editor.io"*/}
          {/*    // demoLink="https://editor.soumya-jit.tech/"*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={5} className="projet-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={leaf}*/}
          {/*    isBlog={false}*/}
          {/*    title="Plant AI"*/}
          {/*    job="Front-end Developer"*/}
          {/*    time="01/2018 - 05/2019"*/}
          {/*    description="• Took responsibilities for developing Angular UI and architecture using Angular Material.*/}
          {/*                Involved in development of UI using HTML5, CSS3, TypeScript, Angular 7 and worked on*/}
          {/*                framework to augment browser-based applications with MVVM capability.*/}
          {/*                Realized functionality of checking authorized or unauthorized users using guards before application*/}
          {/*                Worked on Angular 9 to create custom directives for information presentation and to display data in*/}
          {/*                company standard format with different ways of measurement using custom pipe."*/}
          {/*    // ghLink="https://github.com/soumyajit4419/Plant_AI"*/}
          {/*    // demoLink="https://plant49-ai.herokuapp.com/"*/}
          {/*  />*/}
          {/*</Col>*/}

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Employee Sports Health Management Platform"
              job="Front-end Software Developer"
              time="05/2019 - 08/2021"
              description="• Implemented client-side validations and fetched data using Angular to communicate with RESTful
                          services with JSON Data.
                          Used Angular to make HTML and CSS code interact with TypeScript functions to add dynamism to
                          web pages at client-side."
              description2="• Developed mobile applications using Angular Ionic framework, enabling cross-platform development
                            with a single codebase.
                            Collaborated with UI/UX designers and stakeholders to implement visually appealing and user-friendly
                            interfaces using Angular Ionic components and styles."
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Data intelligence project"
              job="Front-end Developer"
              time="01/2018 - 05/2019"
              description="• Took responsibilities for developing Angular UI and architecture using Angular Material.
                          Involved in development of UI using HTML5, CSS3, TypeScript, Angular 7 and worked on
                          framework to augment browser-based applications with MVVM capability.
                          Realized functionality of checking authorized or unauthorized users using guards before application
                          Worked on Angular 9 to create custom directives for information presentation and to display data in
                          company standard format with different ways of measurement using custom pipe."
              description2="Realized broadcasting subscribed data to all clients end available using Subject and Observable.
                          As well as Utilized whole structure for data binding of platform using ngModel directive."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
