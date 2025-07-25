import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import About from '../pages/About'; // Removed unused import
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import ProfilKampus from '../pages/ProfilKampus';
import ProgramStudi from '../pages/ProgramStudi';
import BackgroundWrapper from '../components/BackgroundWrapper';
import ArtikelPage from "../pages/ArtikelPage";

import StrukturOrganisasi from '../pages/StrukturOrganisasi';
import VisiMisi from '../pages/VisiMisi';
import SejarahKampus from '../pages/SejarahKampus';
import Akreditasi from '../pages/Akreditasi';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <BackgroundWrapper disableBackground={true}>
          <Home />
        </BackgroundWrapper>
      } />
      <Route path="/about" element={
        <BackgroundWrapper>
          <SejarahKampus />
        </BackgroundWrapper>
      } />
      <Route path="/about/struktur" element={
        <BackgroundWrapper>
          <StrukturOrganisasi />
        </BackgroundWrapper>
      } />
      <Route path="/about/visi-misi" element={
        <BackgroundWrapper>
          <VisiMisi />
        </BackgroundWrapper>
      } />
      <Route path="/about/sejarah" element={
        <BackgroundWrapper>
          <SejarahKampus />
        </BackgroundWrapper>
      } />
      <Route path="/about/akreditasi" element={
        <BackgroundWrapper>
          <Akreditasi />
        </BackgroundWrapper>
      } />
      <Route path="/services" element={
        <BackgroundWrapper>
          <Services />
        </BackgroundWrapper>
      } />
      <Route path="/contact" element={
        <BackgroundWrapper>
          <Contact />
        </BackgroundWrapper>
      } />
      <Route path="/pmb" element={
        <BackgroundWrapper>
          <ProfilKampus />
        </BackgroundWrapper>
      } />
      <Route path="/program-studi" element={
        <BackgroundWrapper>
          <ProgramStudi />
        </BackgroundWrapper>
      } />
      <Route path="/artikel" element={<ArtikelPage />} />
      <Route path="/program-studi/perhotelan" element={
        <BackgroundWrapper>
          <ProgramStudi />
        </BackgroundWrapper>
      } />
    </Routes>
  );
};

export default AppRoutes;
