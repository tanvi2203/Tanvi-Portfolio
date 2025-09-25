
import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <h1>My Education</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h2>Bachelor of Science in Information Technology</h2>
            <p>Mumbai University</p>
            <span>2023</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h2>Higher Secondary (12th Grade)</h2>
            <p>Maharashtra State Board</p>
            <span>2019</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h2>Secondary School (10th Grade)</h2>
            <p>Maharashtra State Board</p>
            <span>2018</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
