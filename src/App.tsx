import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaCode, FaShoppingCart, FaList } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import heroImg from "./assets/mock.jpeg";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("id");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

    useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3h1dzol",
      "template_cttof2r",
      e.target as HTMLFormElement,
      "s-3Lh5J8mMvvK-065"
    ).then(
      () => {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      },
      () => {
        setStatus("error");
      }
    );
  };

  const text = {
    id: {
      role: "Frontend Developer",
      about: "Saya adalah siswa kelas 10 program pre-international di MAN 1 Banda Aceh yang memiliki minat besar dalam bidang teknologi dan arsitektur. Saat ini, saya sedang mempelajari coding dan pemrograman untuk mengembangkan kemampuan berpikir logis, problem solving, serta memahami penerapan teknologi dalam berbagai bidang. Selain itu, saya juga mendalami bahasa Inggris dan public speaking guna meningkatkan kemampuan komunikasi dan kepercayaan diri. Saya bercita-cita menjadi arsitek yang mampu mengintegrasikan teknologi digital untuk menciptakan desain bangunan yang cerdas, efisien, dan berkelanjutan. Dengan memanfaatkan keterampilan coding, saya ingin mengembangkan solusi inovatif dalam dunia arsitektur yang dapat memberikan dampak nyata bagi masyarakat di masa depan.",
      contact: "Hubungi Saya",
    },
    en: {
      role: "Frontend Developer",
      about: "I am a 10th-grade student in the pre-international program at MAN 1 Banda Aceh with a strong interest in technology and architecture. Currently, I am studying coding and programming to develop my logical thinking and problem-solving skills, as well as to understand the application of technology in various fields. In addition, I am also studying English and public speaking to improve my communication skills and self-confidence. I aspire to become an architect capable of integrating digital technology to create smart, efficient, and sustainable building designs. By utilizing my coding skills, I aim to develop innovative solutions in the field of architecture that can have a tangible impact on society in the future.",
      contact: "Contact Me",
    },
  };
  

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      <div className="container">

        {/* HEADER */}
        <header className="header">
          <div className="nav-inner">
            <h1 className="logo">Faizil</h1>

            <nav className="nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#certificate">Certificate</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="actions">
              <button onClick={() => setLang(lang === "id" ? "en" : "id")}>🌐</button>
              <button onClick={() => setDark(!dark)}>🌓</button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <motion.section
          id="home"
          className="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src={heroImg} />
          <h2 className="logo">Faizil</h2>
          <p>{text[lang].role}</p>
        </motion.section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h3>About</h3>
          <p>{text[lang].about}</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h3>Skills</h3>
          <div className="skills">
            {["Design", "Coding", "Editing", "Web Dev"].map((s) => (
              <div key={s} className="skill">{s}</div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h3>Projects</h3>

          <div className="projects">
            {[
              {
                title: "Website Portfolio",
                desc: "Website personal untuk menampilkan profil, skill, dan kontak.",
                tech: "React, CSS",
                icon: <FaCode />
              },
              {
                title: "Landing Page Produk",
                desc: "Halaman promosi produk dengan desain modern.",
                tech: "HTML, CSS",
                icon: <FaShoppingCart />
              },
              {
                title: "To Do List App",
                desc: "Aplikasi sederhana untuk mengelola tugas harian.",
                tech: "JavaScript",
                icon: <FaList />
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                className="project"
                whileHover={{ y: -5 }}
              >
              <div className="project-icon">
                {project.icon}
              </div>

                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <small>{project.tech}</small>

                <button className="btn-demo">
                  Live Demo
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATE */}
        <section id="certificate" className="section">
          <h3>Certificates</h3>

          <div className="certificates">
            {[
              "/cert1.png",
              "/cert2.png",
              "/cert3.png",
              "/cert4.png",
              "/cert5.png",
              "/cert6.png",
              "/cert7.png",
              "/cert8.png",
            ].map((img, i) => (
              <div key={i} className="certificate">
                <img src={img} alt={`Certificate ${i}`} />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="contact-left">
            <p className="contact-label">📩 KONTAK</p>
            <h2>Mari Bekerja Sama</h2>
            <p className="contact-desc">
              Punya proyek menarik? Jangan ragu untuk menghubungi saya. Saya terbuka
              untuk diskusi agar solusi yang dibuat benar-benar sesuai kebutuhan Anda.
            </p>

            <div className="contact-info">
              <p><strong>Email</strong><br />faizilabrar8@gmail.com</p>
              <p><strong>Lokasi</strong><br />Aceh Besar, Aceh, Indonesia</p>
              <p><strong>Telepon</strong><br />+62 822 5332 3536</p>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={sendEmail}>
              <label>Nama</label>
              <input 
                type="text" 
                name="name"
                placeholder="Nama Anda"   
                required
              />

              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="email@example.com" 
                required
              />

              <label>Pesan</label>
              <textarea 
                name="message"
                placeholder="Ceritakan tentang proyek Anda..." 
                required
              ></textarea>

              <button type="submit">Kirim Pesan ✈️</button>
            </form>
            
            {status === "success" && (
              <motion.div
                className="notif success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Pesan berhasil dikirim!
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="notif error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Gagal mengirim pesan
              </motion.div>
            )}
          </div>
        </section>
      </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            
            <h3>Faizil Abrar</h3>
            <p>Frontend Developer | Future Architect</p>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">
              <a href="https://github.com" target="_blank"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
              <a href="https://www.instagram.com/faizilabrar_/" target="_blank"><FaInstagram /></a>
              <a href="#"><FaEnvelope /></a>
            </div>


            <p className="footer-copy">
              © 2026 Faizil. All rights reserved.
            </p>

          </div>
        </footer>

    </div>
  );
}