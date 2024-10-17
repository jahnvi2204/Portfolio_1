import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Hire Harbor"
              description="A Job Portal using MERN Stack."
              ghLink="https://github.com/jahnvi2204/project-exhibition2"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Media-Player"
              description="Media Player made using javascript."
              ghLink='https://github.com/jahnvi2204/media-player'
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Password-generator"
              description="Password generator made using ReactJS"
              ghLink='https://github.com/jahnvi2204/React_Basics'
             
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
