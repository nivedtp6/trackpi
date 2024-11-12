import React from 'react';
import './Price.css';
import { Card, Col, Row, Button } from 'react-bootstrap';

const pricingPlans = [
  {
    title: 'MoMo Plan',
    price: '$29.99',
    features: ['Access to MoMo Community', 'Weekly Updates', 'Email Support'],
  },
  {
    title: 'MoMo Pro Plan',
    price: '$59.99',
    features: ['All MoMo Plan Features', 'Exclusive Webinars', 'Priority Customer Support', 'Advanced Analytics'],
  },
  {
    title: 'Basic Plan',
    price: '$19.99',
    features: ['Access to Virtual Coworking', 'Weekly Check-Ins', 'Email Support'],
  },
  {
    title: 'Standard Plan',
    price: '$49.99',
    features: ['Daily Kick-Off Calls', 'Private Slack Group', 'Priority Support'],
  },
  {
    title: 'Premium Plan',
    price: '$99.99',
    features: ['One-on-One Coaching', 'Exclusive Webinars', '24/7 Support'],
  },
];

function Price() {
  return (
    <div className="price-container">
      <h2 className="price-heading">Choose Your Plan</h2>
      <Row className="pricing-row">
        {pricingPlans.map((plan, index) => (
          <Col key={index} md={4} className="pricing-col">
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title className="plan-title">{plan.title}</Card.Title>
                <Card.Text className="plan-price">{plan.price}</Card.Text>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button className="plan-button">Select Plan</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Price;
