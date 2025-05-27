import React from 'react';
import { Container } from 'react-bootstrap';
import './Akreditasi.css';

const Akreditasi = () => {
  return (
    <section className="akreditasi-section">
      <Container>
        <h2 className="akreditasi-title">Akreditasi</h2>
        <h3 className="akreditasi-subtitle">Akademi Pariwisata Cirebon</h3>
        <div className="akreditasi-main">
          {/* Main Content */}
          <div className="akreditasi-content">
            <div className="akreditasi-card">
              <h5>
                Akreditasi <span>Perguruan Tinggi</span>
              </h5>
              <img
                src="/Images/sertifikat_PT.jpeg"
                alt="Sertifikat Akreditasi Perguruan Tinggi"
              />
            </div>
            <div className="akreditasi-card">
              <h5>
                Akreditasi <span>Prodi Perhotelan</span>
              </h5>
              <img
                src="/Images/sertifikat_prodi.jpeg"
                alt="Sertifikat Akreditasi Prodi Perhotelan"
              />
            </div>
          </div>
          {/* Sidebar */}
          <aside className="akreditasi-sidebar">
            <div>
              <h5>Archives</h5>
              <ul>
                <li>Maret 2024</li>
                <li>Februari 2024</li>
                <li>November 2023</li>
                <li>Oktober 2023</li>
              </ul>
            </div>
            <div>
              <h5>Categories</h5>
              <ul>
                <li>Berita</li>
                <li>Kegiatan</li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Akreditasi;
