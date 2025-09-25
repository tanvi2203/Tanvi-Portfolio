import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="experience-card">
        <h2>Apprentice</h2>
        <p><strong>IIT Bombay</strong></p>
        <p><em>Sep 2023 – Sep 2024</em></p>
        <p id='para'>
          Completed a one-year apprenticeship at IIT Bombay under the National Apprenticeship Training Scheme (Ministry of Education), gaining hands-on experience in an 
          academic environment. Supported faculty and staff promotion processes by streamlining documentation, ensuring accuracy, and improving record management.
        </p>
      </div>
    </div>
  );
}

export default Experience;
