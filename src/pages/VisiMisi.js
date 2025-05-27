import React from 'react';
import { Link } from 'react-router-dom';
import './VisiMisi.css';

const VisiMisi = () => {
  return (
    <section className="visi-misi-section">
      <div className="visi-misi-wrapper">
        <nav>
          <ul className="content-list">
            <li className="list-item red">
              <Link to="/about/visi-misi" style={{ color: '#b30000', textDecoration: 'none' }}>Visi dan Misi</Link>
            </li>
            <li className="list-item black">
              <Link to="/about/struktur" style={{ color: '#000', textDecoration: 'none' }}>Struktur Organisasi</Link>
            </li>
            <li className="list-item black">
              <Link to="/about/akreditasi" style={{ color: '#000', textDecoration: 'none' }}>Akreditasi</Link>
            </li>
            <li className="list-item black">
              <Link to="/about/sejarah" style={{ color: '#000', textDecoration: 'none' }}>Sejarah AKPAR</Link>
            </li>
          </ul>
        </nav>
        <div className="visi-misi-content">
          <h2 className="sub-title">Visi AKPAR Yasmi Cirebon</h2>
          <div className="divider" style={{ borderTop: '2px solid #b30000', width: '150px', marginLeft: 0, marginBottom: '1rem' }}></div>
          <p>
            Menjadikan perguruan tinggi unggul dalam menghasilkan sumber daya manusia (SDM) yang kompetitif dan professional
          </p>

          <h2 className="sub-title" style={{ marginTop: '2rem' }}>Misi AKPAR Yasmi Cirebon</h2>
          <div className="divider" style={{ borderTop: '2px solid #b30000', width: '150px', marginLeft: 0, marginBottom: '1rem' }}></div>
          <ol>
            <li>Melaksanakan pendidikan dan pengajaran dibidang pariwisata secara professional Dan berkualitas.</li>
            <li>Melaksanakan pengembangan penelitian yang unggul, serta publikasi yang berbasis pada bidang pariwisata.</li>
            <li>Melaksanakan pengabdian masyarakat yang kompetitif sebagai sarana pengembangan dan wujud kepedulian terhadap perkembangan masyarakat demi terbinanya Sumber Daya Manusia (SDM) yang berkualitas dan produktif bagi masyarakat, bangsa dan Negara.</li>
            <li>Menjalin kemitraan dengan berbagai instansi dalam peningkatan tridharma perguruan tinggi baik nasional maupun internasional.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
