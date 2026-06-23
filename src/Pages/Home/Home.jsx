
import React, { useState, useEffect } from 'react';
import './Home.css';
import portrait from './image1.jpg';

function Home() {
  // Roles to rotate through
  const roles = ["Full Stack Developer", "Web Developer", "Frontend Developer"];
  const [currentRole, setCurrentRole] = useState('');
  const [index, setIndex] = useState(0); // role index
  const [charIndex, setCharIndex] = useState(0); // letter index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 80 : 150;

    const typeEffect = setTimeout(() => {
      const fullRole = roles[index];

      if (!deleting && charIndex < fullRole.length) {
        setCurrentRole(fullRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setCurrentRole(fullRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === fullRole.length) {
        setTimeout(() => setDeleting(true), 1500); // pause before deleting
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length); // move to next role
      }
    }, typingSpeed);

    return () => clearTimeout(typeEffect);
  }, [charIndex, deleting, index, roles]);

  return (
    <>
      <section className="home">
        <div className="home-info">
          <h2>Hello, It's Me</h2>
          <h1>Tanvi Dudhgaonkar</h1>
          <h2>
            I'm a <span className="typing">{currentRole}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
           A Full Stack & Frontend Developer passionate about crafting intuitive, responsive web experiences while constantly learning and exploring new technologies.
          </p>
          <div className="btn-sci">
          <a
            href="Tanvi_Dudhgaonkar_Resume_FrontendDeveloper.docx"
            download="Tanvi_Dudhgaonkar_Resume_FrontendDeveloper.docx"
            className="tn"
            >
              Download CV
              </a>

          </div>
        </div>
        <div className="home-img">
          <div className="img-box glowing-border">
            <div className="img-item">
              <img src={portrait} alt="Portrait" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
