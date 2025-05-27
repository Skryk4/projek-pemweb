import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';


const Services = () => {
  return (
    <section className="py-5 page-section">
      <Container>
        <div className="text-center mb-5" data-aos="zoom-in">
          <h2>Our Services</h2>
          <p>We offer a wide range of digital solutions</p>
        </div>
        <Row>
          <Col md={4} data-aos="fade-up">
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Build modern and responsive websites with the latest technologies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  Design user-centered interfaces that are both beautiful and functional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Consulting</Card.Title>
                <Card.Text>
                  Get expert advice on technology strategy and project planning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
