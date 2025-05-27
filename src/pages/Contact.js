import React from 'react';
import './ContactUpdated.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Kontak Kami</h2>
          <p>Silahkan tinggalkan pesan anda, pada kolom yang tersedia.</p>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <label htmlFor="name">Nama Anda:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Masukkan Nama" 
              required 
            />
            <label htmlFor="email">E-mail Anda:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Masukkan Email" 
              required 
            />
            <label htmlFor="message">Pesan Anda:</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Masukkan Pesan" 
              rows="5" 
              required 
            />
            <button type="submit">POST</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
