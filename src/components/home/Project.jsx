import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './projectImages/project.css'
import {Card,Button,CardGroup} from 'react-bootstrap'
var project1 = require('./projectImages/project1.jpg')
var project2 = require('./projectImages/project2.png')
var project3 = require('./projectImages/project3.png')
var project4 = require('./projectImages/project4.png')


const Project = () => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        <Row>
<CardGroup>
<Col className ="md-6">
  <Card>
    <Card.Img variant="top" src={project1} />
    <Card.Body>
      <Card.Title>React Admin</Card.Title>
      <Card.Text>
      To make this portal i use react js front with  node js backend
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
 
<Col className ="md-6">
  <Card>
    <Card.Img variant="top" src={project2} />
    <Card.Body>
      <Card.Title>Codestarc </Card.Title>
      <Card.Text>
        The codestarc company website is made in php /wordpress
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
 
<Col className ="md-6">
  <Card>
    <Card.Img variant="top" src={project3} />
    <Card.Body>
      <Card.Title>Tour and Travel</Card.Title>
      <Card.Text>
        This  project is made in angular 9 technology
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
 
</CardGroup>
</Row>
<br />
<br />
        <Row>
<CardGroup>
<Col className ="md-6">
  <Card>
    <Card.Img  src={project1} fluid={true} alt="Card image" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
 
<Col className ="md-6">
  <Card>
    <Card.Img variant="top" src={project4} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
 
<Col className ="md-6">
  <Card>
    <Card.Img variant="top" src={project1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
 
</CardGroup>
</Row>
</Container>
      
    </Jumbotron>
  );
}

export default Project;
