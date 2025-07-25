import React, { useEffect, useState } from "react";
import './ArtikelPageOverride.css';

const ArtikelList = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    fetch("http://localhost/list.php")
      .then((res) => res.json())
      .then((data) => setArtikel(data))
      .catch((err) => console.error("Gagal fetch artikel:", err));
  }, []);

  return (
    <div className="artikel-page-container">
      <h2>Artikel Kampus</h2>
      <ul>
        {artikel.length === 0 ? (
          <p>Belum ada artikel.</p>
        ) : (
          artikel.map((item) => (
            <li key={item.id}>
              <h3>{item.judul}</h3>
              <p><strong>Penulis:</strong> {item.penulis}</p>
              <p><strong>Tanggal:</strong> {item.tanggal}</p>
              <p>{item.isi}</p>
              <hr />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ArtikelList;
