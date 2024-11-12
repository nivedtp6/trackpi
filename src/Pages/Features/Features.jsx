// src/Features.jsx
import React from 'react';
import './Features.css';
import { Card, Col, Row } from 'react-bootstrap';

const features = [
  {
    title: 'Morning Kick-Off Calls',
    description: 'Start your day with energy and focus by joining our daily kick-off calls.',
    icon: '🌅',
  },
  {
    title: 'Virtual Coworking',
    description: 'Work alongside others virtually to stay motivated and productive.',
    icon: '💻',
  },
  {
    title: 'Private Slack Group',
    description: 'Connect and collaborate with like-minded individuals in our private Slack community.',
    icon: '💬',
  },
];

function Features() {
  return (
    <div className="features-container">
      <h2 className="section-heading">Platform Features</h2>
      <Row className="features-row">
        {features.map((feature, index) => (
          <Col key={index} md={4} className="feature-col">
            <Card className="feature-card">
              <Card.Body>
                <div className="feature-icon">{feature.icon}</div>
                <Card.Title className="feature-title">{feature.title}</Card.Title>
                <Card.Text className="feature-description">{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <section className="features-section">
  <h2>Motivated Mornings: A Virtual Coworking Community to Boost Your Productivity</h2>
  
  <div className="feature-grid">
    <div className="feature-item">
      <img src="path-to-morning-call-icon" alt="Morning Kick-Off Calls Icon" />
      <h3>Morning Kick-Off Calls</h3>
      <p>Jumpstart each day with a 10-min group video call focused on setting a productive tone for the day. Stay accountable with peers. Available Mon–Fri at 8 am and 7 pm.</p>
    </div>
    
    <div className="feature-item">
      <img src="path-to-virtual-coworking-icon" alt="Virtual Coworking Icon" />
      <h3>Virtual Coworking</h3>
      <p>Following the Morning Kick-Off Calls, cowork virtually with other creators to stay focused and celebrate progress.</p>
    </div>

    <div className="feature-item">
      <img src="path-to-slack-group-icon" alt="Private Slack Group Icon" />
      <h3>Private Slack Group</h3>
      <p>Stay connected with fellow members in a Slack group designed for sharing goals, getting feedback, and celebrating achievements.</p>
    </div>

    <div className="feature-item">
      <img src="path-to-coaching-icon" alt="Productivity Coaching Icon" />
      <h3>Productivity Coaching Sessions*</h3>
      <p>Weekly 30-min personal coaching sessions to keep you motivated and progressing towards your goals.</p>
    </div>

    <div className="feature-item">
      <img src="path-to-action-plan-icon" alt="Tailored Action Plans Icon" />
      <h3>Tailored Action Plans*</h3>
      <p>Receive a customized plan to help you stay on track and achieve specific goals with guidance.</p>
      <small>*Available exclusively with this plan</small>
    </div>
  </div>
</section>

    </div>
  );
}

export default Features;
