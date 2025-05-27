import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavbarOverrideNew.css';
import HeaderTop from './HeaderTop';
import './HeaderTop.css';

const NavigationBar = () => {
  return (
    <>
      <HeaderTop />
      <Navbar bg="light" variant="light" expand="lg" fixed="top" className="custom-navbar" style={{ top: '45px' }}>
        <div className="custom-container">
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center text-dark"
            style={{ paddingTop: '12px', fontWeight: '700', fontSize: '1.3rem', lineHeight: '1.2' }}
          >
            <img
              src="/Images/Logo.png"
              alt="Logo"
              height="50"
              className="me-2"
              style={{ marginTop: '6px' }}
            />
            AKADEMI PARIWISATA YASMI
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto align-items-center">
              <Nav.Link as={NavLink} to="/" className="text-dark fw-bold">BERANDA</Nav.Link>
              <NavDropdown title="PROFIL KAMPUS" id="profil-kampus-nav-dropdown" className="text-dark fw-bold">
                <NavDropdown.Item as={NavLink} to="/about/struktur">Struktur Organisasi</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/about/visi-misi">Visi, Misi, Dan Tujuan</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/about/sejarah">Sejarah Kampus</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/about/akreditasi">Akreditasi</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PROGRAM STUDI" id="program-studi-nav-dropdown" className="text-dark fw-bold">
                <NavDropdown.Item as={NavLink} to="/program-studi/perhotelan">Perhotelan</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="AKADEMIK" id="akademik-nav-dropdown" className="text-dark fw-bold">
                <NavDropdown.Item as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSfmbyWqAIR095xjnMfZCiBcIxMhUU0f0iiz4lSK3W2M2_R-OQ/viewform">PMB</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/contact" className="text-dark fw-bold">HUBUNGI KAMI</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavigationBar;
