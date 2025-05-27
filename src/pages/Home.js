import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../components/Testimonial';

import './HomeOverride.css';

const Home = () => {
  const images = [
    '/Images/bg1.png',
    '/Images/bg2.png'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  useEffect(() => {
    // Tambahkan class khusus ke body saat halaman Home aktif
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <>
      <section id="beranda" className="home-section">
        <Slider {...settings} className="home-slider">
          {images.map((imgSrc, index) => (
            <div key={index} className="slide">
              <img src={imgSrc} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </Slider>
      </section>

      <section className="why-choose-section">
        <h2 className="why-choose-title">
          Mengapa Memilih <span>AKPAR YASMI CIREBON?</span>
        </h2>
        <div className="why-choose-grid">
          <div className="choose-box light-green">
            <div className="icon-circle">
              {/* Book Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22">
                <path d="M19 2H9a2 2 0 0 0-2 2v16a1 1 0 0 0 1.447.894L15 17h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM9 4h10v11h-3.586l-4.707 2.828V4z"/>
              </svg>
            </div>
            <h3>Kurikulum Berbasis KKNI &amp; MRA</h3>
            <p>
              Pembelajaran Di Akademi Parawisata Yasmi Cirebon didasarkan kepada kurikulum yang disusun berdasarkan KKNI dan memenuhi standar ASEAN MRA (Mutual Recognition Arrangement) on Tourism Professionals.
            </p>
          </div>
          <div className="choose-box light-yellow">
            <div className="icon-circle">
              {/* Ribbon Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22">
                <path d="M12 2a5 5 0 0 0-5 5c0 3.866 5 9 5 9s5-5.134 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
              </svg>
            </div>
            <h3>Dosen &amp; Instruktur Profesional berpengalaman Internasional</h3>
            <p>
              Akademi Parawisata Yasmi Cirebon memiliki Tenaga Pendidik dan Instruktur yang Profesional di Industri Pariwisata serta berpengalaman Internasional
            </p>
          </div>
          <div className="choose-box light-pink">
            <div className="icon-circle">
              {/* Grid Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22">
                <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
              </svg>
            </div>
            <h3>Fasilitas Lengkap</h3>
            <p>
              Kami memiliki fasilitas yang menunjang perkuliahan, seperti Laboratorium Praktek, Lab. Restorant, Lab. Kitchen dan Perpustakaan yang representasif.
            </p>
          </div>
          <div className="choose-box light-blue">
            <div className="icon-circle">
              {/* Globe Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm5.93 6H16a15.3 15.3 0 0 0-1.18-3.54A8.034 8.034 0 0 1 17.93 8zM12 4a13.3 13.3 0 0 1 1.45 4H10.55A13.3 13.3 0 0 1 12 4zm-4.07 2.46A15.3 15.3 0 0 0 6 8H5.07a8.034 8.034 0 0 1 2.86-1.54zM4 12a7.9 7.9 0 0 1 0-1.94h3.18a13.3 13.3 0 0 0-.18 1.94 13.3 13.3 0 0 0 .18 1.94H4a7.9 7.9 0 0 1 0-1.94zm1.93 4.54A8.034 8.034 0 0 1 5.07 16H6a15.3 15.3 0 0 0 1.18 3.54 8.034 8.034 0 0 1-2.25-3zm6.07 3.46a13.3 13.3 0 0 1-1.45-4h2.9a13.3 13.3 0 0 1-1.45 4zm1.93-1.46a15.3 15.3 0 0 0 1.18-3.54h1.86a8.034 8.034 0 0 1-3.04 3.54zm3.04-4.54h-3.18a13.3 13.3 0 0 0 .18-1.94 13.3 13.3 0 0 0-.18-1.94h3.18a7.9 7.9 0 0 1 0 3.88z"/>
              </svg>
            </div>
            <h3>PRAKERIN atau Bekerja di Luar Negeri</h3>
            <p>
              Anda berskesempatan PRAKERIN (Praktek Kerja Industri) atau Bekerja diluar Negeri dan mampu bersaing ditingkat Nasional maupun Global.
            </p>
          </div>
          <div className="choose-box light-purple">
            <div className="icon-circle">
              {/* Chart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22">
                <path d="M3 17h2v-7H3zm4 0h2v-4H7zm4 0h2v-9h-2zm4 0h2v-2h-2zm4 0h2v-5h-2z"/>
              </svg>
            </div>
            <h3>60% Praktik, 40% Teori</h3>
            <p>
              Dengan 60% Praktik, Mahasiswa akan siap bekerja di Dunia Industri maupun berwirausaha
            </p>
          </div>
          <div className="choose-box light-cyan">
            <div className="icon-circle">
              {/* Building Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22">
                <path d="M4 22h16v-2H4zm2-4h2v-6H6zm4 0h2v-4h-2zm4 0h2v-8h-2zm4 0h2v-10h-2zM2 22h2v-8H2zm18-12h-2v-2h2zm-4 0h-2v-2h2zm-4 0h-2v-2h2zm-4 0H6v-2h2z"/>
              </svg>
            </div>
            <h3>Memiliki Kerjasama Nasional dan Internasional</h3>
            <p>
              Kami memiliki kerjasama Nasional maupun Internasional, kerjasama dengan Industri, Institusi Pemerintahan, Perguruan Tinggi Negeri maupun Swasta.
            </p>
          </div>
        </div>
      </section>

      <Testimonial />
    </>
  );
};

export default Home;
