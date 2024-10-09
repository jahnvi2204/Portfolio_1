import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jahnvi Saxena </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />
            A passionate tech enthusiast and a pre-final year Computer Science student at VIT Bhopal.
            <br />
            I’m diving deep into the MERN stack to build innovative web applications.
          </p>
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
