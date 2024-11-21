import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>

      <section className="home-section" id="home">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col md={8}>
              <h1 className="heading">Cloud Computing CA2 Activity</h1>
              <p className="subheading">
                Final Year Student at Bajaj Institute of Technology
              </p>
              <p className="intro-text">
                Passionate about coding and web technologies. I love building
                modern web applications that solve real-world problems. Skilled
                in HTML, CSS, JavaScript, React, and more.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </>
  );
}

export default Home;
