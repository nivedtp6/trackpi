import React from 'react';
import './Home.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <Row className="content-row">
        <Col className="text-col">
          <h1 className="main-heading">Actually do the work.</h1>
          <p className="subheading">
            Boost your productivity and achieve your goals with ease.
          </p>
          <Link to={'/features'}>          <button className="cta-button">Get Started</button>          </Link>
        </Col>
        <Col className="image-col">
          <div className="image-container">
            <img
              src="https://cdn.aib.edu.au/public-website/uploads/p/2019/03/form-submission-7476-toptipseffectiveteamwork-desktop-768x432-1606697199-85.jpg"
              alt="Illustration"
              className="illustration"
            />
            <div className="text-bubble">Let's make it happen!</div>
          </div>
        </Col>
      </Row>
      <div className="card-container">
        <Card className="custom-card">
          <Card.Img style={{width:'280px'}} variant="top" src="https://clipart-library.com/images/dc4o8nKri.jpg" />
          <Card.Body></Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Img style={{width:'280px'}} variant="top" src="https://img.freepik.com/premium-vector/working-little-people-with-puzzles_156892-1137.jpg" />
          <Card.Body></Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Img style={{width:'280px'}} variant="top" src="https://img.freepik.com/premium-vector/business-team-managers-meeting-round-table_213110-2374.jpg" />
          <Card.Body></Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
