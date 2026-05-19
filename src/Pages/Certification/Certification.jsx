import "./Certification.css";

function Certification() {
  const certifications = [
    {
<<<<<<< HEAD
      title: "Full Stack Web Development ",
      issuer: "NetTech India",
      date: "5 Sep 2025",
      credential:"https://drive.google.com/file/d/1nD9GvtRO4FdT3qXW2XoCxjliQzAxbfLk/view?usp=sharing",
=======
      title: "SQL for Data Analysis",
      issuer: "Simplilearn",
      date: "May 2026",
      credential: "https://drive.google.com/file/d/1qsqo7ZzB9DB2gnHXkonQnO3gYhxYh-a3/view?usp=sharing",
    },
     {
      title: "Fullstack Python Course",
      issuer: "NetTech India",
      date: "Sep 2025",
      credential: "https://drive.google.com/file/d/1aggn9ZJ22ITxVW5fbsghRKNqKz_ma5pp/view?usp=sharing",
    },
     {
      title: "Deloitte Australia – Data Analytics Job Simulation ",
      issuer: "Forage",
      date: "June 2025",
      credential: "https://drive.google.com/file/d/1S-Bpe_5XIpdP21Sn3jECAfmH2nxvp2zd/view?usp=sharing",
>>>>>>> 8c04c5c12a9acda259a65d1d7eb36e41d5bd8d2b
    },
    {
      title: " Python Programming",
      issuer: "Kodacy in association with Scientific Platforms and Cosmic Explorations (SPACE)",
      date: "September 2023",
      credential: "https://drive.google.com/file/d/125BLrGqTw23K8q-79Uwy5h_1h0hWF5An/view?usp=sharing",
    },
    {
      title: "Blockchain Technology",
      issuer: "",
      date: "2022",
      credential: "https://drive.google.com/file/d/1yCHlwgy8KUxl9s7jrsPn7xVVHR10_FRs/view?usp=sharing",
    },
   
     
  ];

  return (
    <section className="certification-section" id="certification">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certification-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
