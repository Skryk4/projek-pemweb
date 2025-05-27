import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SejarahKampus.css';

const ProgramStudi = () => {
  return (
    <section className="sejarah-section">
      <Container className="py-4">
        <div className="text-center mb-4">
          <h3>D3 Perhotelan</h3>
          <h2 className="text-danger fw-bold">Akademi Pariwisata Yasmi Cirebon</h2>
        </div>
        <div className="row">
          {/* Left column: Program details and accordion */}
          <div className="col-md-6">
            <h5 className="mb-3" style={{ borderBottom: '3px solid #3b82f6', display: 'inline-block' }}>
              Program Studi D3 Perhotelan
            </h5>
            <div className="accordion" id="programStudiAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingAkreditasi">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseAkreditasi"
                    aria-expanded="false"
                    aria-controls="collapseAkreditasi"
                  >
                    Akreditasi
                  </button>
                </h2>
                <div
                  id="collapseAkreditasi"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingAkreditasi"
                  data-bs-parent="#programStudiAccordion"
                >
                <div className="accordion-body">
                  Baik
                </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingGelar">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseGelar"
                    aria-expanded="false"
                    aria-controls="collapseGelar"
                  >
                    Gelar Lulusan
                  </button>
                </h2>
                <div
                  id="collapseGelar"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingGelar"
                  data-bs-parent="#programStudiAccordion"
                >
                <div className="accordion-body">
                  A.md., Par(ahli Madya Pariwisata)
                </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingIjin">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseIjin"
                    aria-expanded="false"
                    aria-controls="collapseIjin"
                  >
                    Ijin Penyelenggaraan
                  </button>
                </h2>
                <div
                  id="collapseIjin"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingIjin"
                  data-bs-parent="#programStudiAccordion"
                >
                  <div className="accordion-body">
                    {/* Content for Ijin Penyelenggaraan can be added here */}
                    Informasi ijin penyelenggaraan program studi D3 Perhotelan.
                  </div>
                </div>
              </div>
              {/* Accordion item baru */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFasilitas">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFasilitas"
                    aria-expanded="false"
                    aria-controls="collapseFasilitas"
                  >
                    Fasilitas Pendukung
                  </button>
                </h2>
                <div
                  id="collapseFasilitas"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFasilitas"
                  data-bs-parent="#programStudiAccordion"
                >
                  <div className="accordion-body">
                    Fasilitas lengkap untuk mendukung proses belajar dan praktik mahasiswa di bidang perhotelan.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column: Video and accreditation image */}
          <div className="col-md-6">
            <div className="mb-3">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/3ZpO-6qxAqQ"
                  title="Profile Akpar Yasmi Cirebon"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <img
                src="/Images/sertifikat_prodi.jpeg"
                alt="sertifikat_prodi"
                className="img-fluid border"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramStudi;
