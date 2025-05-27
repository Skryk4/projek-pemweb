import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Selama menjadi mahasiswa di AKPAR YASMI, Saya belajar banyak hal melalui pengalaman berharga dan mendapatkan ilmu yang sangat luar biasa. Saya Sangat berterima kasih kepada kampus karena telah memberikan fasilitas yang sangat baik untuk mahasiswanya.",
    name: "Romi Apriyanto",
    batch: "Alumni Angkatan 2019",
    photo: "/Images/romi.jpg" // Ganti dengan path foto asli jika ada
  },
  {
    id: 2,
    rating: 5,
    text: "Kesan saya selama di AKPAR Yasmi sangat baik, komunikasi baik terhadap Teman mau pun Dosen dan Keluarga besar Yasmi. Pesan nya ditingkatkan lagi fasilitas-fasilitas yang memadai baik diluang lingkup maupun luar kampus.",
    name: "Nur Salsabila",
    batch: "Alumni Angkatan 2019",
    photo: "/Images/nur.jpg" // Ganti dengan path foto asli jika ada
  },
  {
    id: 3,
    rating: 5,
    text: "Pengalaman saya selama kuliah di AKPAR YASMI sangat menyenangkan, banyak ilmu yang didapat dan kesempatan membuka wawasan baru. Fasilitas kampus juga sangat memadai.",
    name: "Siti Aminah",
    batch: "Alumni Angkatan 2020",
    photo: "/Images/siti.jpg" // Ganti dengan path foto asli jika ada
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState('');
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setAnimation('slide-left');
  };

  const prevTestimonial = () => {
    setAnimation('slide-right');
  };

  const handleAnimationEnd = () => {
    if (animation === 'slide-left') {
      setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    } else if (animation === 'slide-right') {
      setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    }
    setAnimation('');
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnimation('slide-left');
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [current]);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">
        Testimoni Alumni <br />
        <span>AKPAR YASMI CIREBON</span>
      </h2>
      <div className="testimonial-cards">
        <div className={`testimonial-background ${animation}`}></div>
        <div
          className={`testimonial-card ${animation}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="testimonial-rating">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <span key={i} className="star">&#9733;</span>
            ))}
          </div>
          <p className="testimonial-text">{testimonials[current].text}</p>
          <div className="testimonial-footer">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="testimonial-photo"
            />
            <div>
              <h4 className="testimonial-name">{testimonials[current].name}</h4>
              <p className="testimonial-batch">{testimonials[current].batch}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={() => { clearInterval(intervalRef.current); prevTestimonial(); }} className="nav-button">&#8592;</button>
        <button onClick={() => { clearInterval(intervalRef.current); nextTestimonial(); }} className="nav-button">&#8594;</button>
      </div>
    </section>
  );
};

export default Testimonial;
