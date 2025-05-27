import React from 'react';
import { Container } from 'react-bootstrap';

const StrukturOrganisasi = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Container className="text-center">
        <h2 style={{ fontSize: '2.5rem', color: '#495057', marginBottom: '0.5rem' }}>
          Struktur Organisasi
        </h2>
        <h3 style={{ fontSize: '2rem', color: '#b30000', fontWeight: 'bold', marginBottom: '2rem' }}>
          AKPAR YASMI CIREBON
        </h3>

        <img
          src="/images/Struktur-organisasi.jpeg"
          alt="Struktur Organisasi"
          style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', padding: '10px' }}
        />
      </Container>
    </section>
  );
};

export default StrukturOrganisasi;
