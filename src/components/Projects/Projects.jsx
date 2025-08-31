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
              // imgPath="https://imgs.search.brave.com/UTmitmyVbUKgvlJqf3c92NX5rOOMjDPqVhKKe6wGJtg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qb2Itc2VhcmNo/LWNvbmNlcHRfMjk1/MzAzLTI4Ny5qcGc_/c2VtdD1haXNfaHli/cmlk"
              title="IntelliStock"
              description="Inventory Management Platform"
              ghLink="https://github.com/jahnvi2204/Inventory-Tracker"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              // imgPath="https://i.pinimg.com/474x/15/34/92/153492d5cc36e23919920d27ab4b08cc.jpg"
              title="SereNova-AI"
              description="Mental Health Chatbot"
              ghLink='https://github.com/jahnvi2204/SereNova-AI'
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              // imgPath="https://i.pinimg.com/474x/48/a3/3e/48a33ee0f91e771aebdd698ea2421549.jpg"
              title="CodeGuardAI"
              description="AI Powered Vulnerability Detector"
              ghLink='https://github.com/jahnvi2204/CodeGuard-AI'
             
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
