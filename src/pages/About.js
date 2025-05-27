import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const About = () => {
  return (
    <section
      className="py-5 page-section"
      style={{
        backgroundImage: 'url("Images/bg.jpg")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        minHeight: '750px',
        width: '100%'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img
              src="Images/bg.jpg"
              alt="Sejarah Kampus"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2>Sejarah Kampus</h2>
            <p>
              Akademi Pariwisata YASMI didirikan dengan tujuan untuk memberikan pendidikan tinggi yang berkualitas di bidang pariwisata. Sejak awal berdirinya, kampus ini telah berkomitmen untuk mencetak tenaga profesional yang siap bersaing di industri pariwisata nasional maupun internasional.
            </p>
            <p>
              Kampus ini terus berkembang dengan menyesuaikan kurikulum dan fasilitas sesuai dengan kebutuhan zaman, serta menjalin kerja sama dengan berbagai institusi dan industri pariwisata untuk mendukung proses pembelajaran yang aplikatif dan relevan.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
