import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="about-description">
            <h2>About Me</h2>
            <p>
              Hello, I'm <span className="highlight">Saloni Kanoje</span>, a final year student at
              <span className="highlight"> Bajaj Institute of Technology</span>. 
              <br /><br />
              I am passionate about Web Development and have experience with
              technologies like <b>HTML, CSS, JavaScript, React, and Node.js</b>.
              <br /><br />
              I love building interactive and user-friendly web applications.
              My interests include exploring the latest web technologies and
              constantly enhancing my coding skills.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
