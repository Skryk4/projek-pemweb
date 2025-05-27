import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import './SejarahKampus.css';

const SejarahKampus = () => {
  return (
    <section className="sejarah-section" style={{ backgroundImage: 'none' }}>
      <Container>
        <h2 className="sejarah-title">Sejarah</h2>
        <div className="sejarah-content">
          <p>
            <strong>YASMI</strong> adalah singkatan dari Yayasan Martha Indonesia, sedangkan <strong>MARTHA</strong> singkatan gabungan pasangan suami-istri pendiri yayasan ini yaitu H. Mr. Maramis Roses dan Hj. Rustawati. Pasangan suami-istri ini berasal dari Sumatera Barat (Minang Kabau) dan menginjakkan kakinya pertama kali di kota wali Cirebon pada tahun 1979.
          </p>
          <p>
            Sebelum berbentuk Yayasan Mr. Maramis dan istri menyelenggarakan kursus keterampilan diantaranya mengetik, computer, Bahasa Inggris dan Akuntansi dengan nama LPK Martha Express yang berlokasi di Jl. Tuparev No. 71 tepatnya di depan Mandiri. Pada tahun 1986 LPK Martha Express berkembang menjadi sebuah Yayasan Pendidikan dengan Nama Yayasan Martha Indonesia dengan Program Studi / Jurusan Diploma I Bidang Perotelan, Perbankan, Sekretaris, Komputer dan Komputer Akuntansi dengan menempati gedung baru yaitu Kampus I YASMI sekarang ini.
          </p>
          <p>
            Disamping itu YASMI juga sempat membuka beberapa cabang diantaranya di Indramayu, Kuningan, Majalengka, Tasik, Tegal dan Magelang. Karena kekurangan tenaga yang professional akhirnya semua cabang tadi ditutup.
          </p>
          <p>
            Berkat keuletan dan kerja keras Ketua YASMI dan seluruh karyawan akhirnya pada tahun 1994 YASMI dipercaya oleh pemerintah untuk menyelenggarakan Program D3 yaitu Akademi Bank (AKBANK) dan Akademi Pariwisata (AKPAR). Dan sampai saat ini YASMI dengan semua Program Studi yang ada telah meluluskan kurang lebih 2500 lulusan D1, D3 dan S1. Pada tahun 1998 YASMI mendapatkan Piagam Penghargaan dibidang Kepariwisataan dari Pemerintah karena jasa YASMI yang telah ikut mempelopori kemajuan industry pariwisata di Wilayah III Cirebon.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SejarahKampus;
