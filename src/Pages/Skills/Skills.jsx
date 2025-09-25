
import React from 'react';
import './Skills.css';

const skillsData = {
  languages: [
    { name: 'HTML', icon: '/Icons/icons8-html5.svg' },
    { name: 'CSS', icon: '/Icons/icons8-css3.svg' },
    { name: 'JavaScript', icon: '/Icons/icons8-javascript.svg' },
    { name: 'Python', icon: '/Icons/icons8-python.svg' },
    { name: 'SQL', icon: '/Icons/icons8-sql-50.png' }, 
  ],
  frameworks: [
    { name: 'React JS', icon: '/Icons/icons8-react-js.svg' },
    { name: 'Node JS', icon: '/Icons/icons8-node-js.svg' },
    { name: 'Tailwind CSS', icon: '/Icons/icons8-tailwind-css.svg' },
    { name: 'Bootstrap', icon: '/Icons/icons8-bootstrap.svg' },
     { name: 'jQuery', icon: '/Icons/icons8-jquery-24.png' },
  ],
  tools: [
    { name: 'Git', icon: '/Icons/icons8-git.svg' },
    { name: 'GitHub', icon: '/Icons/icons8-github.svg' },
    { name: 'VS Code', icon: '/Icons/icons8-vs-code.svg' },
  ],
};

function Skills () {
  return (
    <section className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;




