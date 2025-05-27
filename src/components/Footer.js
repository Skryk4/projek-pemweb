import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaGraduationCap } from 'react-icons/fa';
import ErrorBoundary from './ErrorBoundary';

const Footer = () => {
  return (
    <ErrorBoundary>
      <>
        <footer style={{ backgroundColor: '#c62828', color: '#fff', padding: '2rem 3rem', marginTop: 'auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {/* Kolom Hubungi Kami */}
            <div style={{ flex: '1 1 300px', marginRight: '2rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Hubungi Kami</h3>
              <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
                Kampus 2 YASMI : Jl. Tuparev / Islamic Center No. 1–3
              </p>
              <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <FaEnvelope style={{ marginRight: '0.5rem' }} />
                info@yasmicrb.ac.id
              </p>
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <FaWhatsapp style={{ marginRight: '0.5rem' }} />
                (+62) 812–2339–4535
              </p>
            </div>

            {/* Kolom Aplikasi Kampus */}
            <div style={{ flex: '1 1 200px', marginRight: '2rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Aplikasi Kampus</h3>
              <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <FaGraduationCap style={{ marginRight: '0.5rem' }} /> PMB YASMI
              </p>
              <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <FaGraduationCap style={{ marginRight: '0.5rem' }} /> SIAKAD YASMI
              </p>
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <FaGraduationCap style={{ marginRight: '0.5rem' }} /> ALUMNI YASMI
              </p>
            </div>

            {/* Kolom Google Maps */}
            <div style={{ flex: '1 1 300px', borderRadius: '10px', overflow: 'hidden' }}>
              <iframe
                title="Google Maps Akademi Pariwisata Yasmi Cirebon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.1234567890123!2d108.5372919!3d-6.7124788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee216aec08583%3A0xdad694c59c332d2d!2sAkademi%20Pariwisata%20%28AKPAR%29%20Yasmi%20Cirebon!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Tombol WhatsApp Mengambang */}
          <a
            href="https://wa.me/6281223394535"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#25D366',
              color: 'white',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              zIndex: 1000,
              textDecoration: 'none',
            }}
            aria-label="Chat WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </footer>
      </>
    </ErrorBoundary>
  );
};

export default Footer;
