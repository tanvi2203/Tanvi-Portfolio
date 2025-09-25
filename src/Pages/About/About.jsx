
import './About.css';
import portrait from './img1.png';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">
        About <span className="highlight">Me</span>
      </h1>

      <div className="about-card">
        <div className="profile-pic">
          <img src={portrait} alt="Profile" />
        </div>

        <h2 className="subtitle">Full Stack Developer!</h2>

        <p className="description">
    "Hi, I’m Tanvi Dudhgaonkar - a passionate Full Stack and Frontend Developer who loves turning ideas into seamless digital experiences. 
    While my journey began with an apprenticeship at IIT Bombay under the Ministry of Education’s National Apprenticeship Training Scheme, 
    where I developed strong skills in organization, documentation, and collaboration, I soon discovered my true passion in technology and web development.
    Now, I focus on combining creativity and clean code to deliver impactful digital solutions while continuously learning and evolving in the tech field."
       </p>

       
      </div>
    </div>
  );
}

export default About;
