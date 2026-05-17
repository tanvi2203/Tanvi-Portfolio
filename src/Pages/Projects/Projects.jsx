import React from 'react';
import './Projects.css';
import portfolioImg from "/Images/portfolio1.jpg";
import coffeeShopImg from "/Images/coffee3.jpg";
import flowerShopImg from "/Images/flower1.jpg";
import galleryImg from "/Images/image1.jpg"; 

const projects = [
  {
    title: "Portfolio Website",
    imgSrc: portfolioImg,
    demoLink: "https://tanvi-portfolio-nine.vercel.app/",
    tech: "HTML , CSS , Javascript , React",
    description: "Personal website showcasing projects and resume."
  },
  {
   {
  title: "Customer Data Cleaning Insights",
  imgSrc: customerDataImg,
  demoLink: "https://tanvi2203.github.io/customer-data-cleaning-insights/",
  tech: "Python, Pandas, MySQL, HTML, CSS, JavaScript",
  description: "Data analytics project focused on customer personality analysis using Python (Pandas) and MySQL, featuring data cleaning, business insights, and SQL-driven identification of high-value customer segments."
  },
  {
    title: "Coffee Shop Website",
    imgSrc: coffeeShopImg,
    demoLink: "https://tanvi2203.github.io/Coffee-Shop-Website/",
    tech: "HTML, CSS",
    description: "Landing page for a modern coffee shop."
  },
  {
    title: "Flower Shop Website",
    imgSrc: flowerShopImg,
    demoLink: "https://tanvi2203.github.io/Flower-shop-website/",
    tech: "HTML",
    description: "Minimalist floral boutique website."
  },
  {
    title: "Image Gallery",
    imgSrc: galleryImg,
    demoLink: "https://tanvi2203.github.io/Image-Gallery/",
    tech: "HTML",
    description: "Image gallery with built-in image download functionality."
  },
];

function Projects() {
  return (
    <div className="projects-wrapper">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.imgSrc} alt={project.title} className="card-img" />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <p className="description">{project.description}</p>
              <a href={project.demoLink} target="_blank" className="demo-button">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
