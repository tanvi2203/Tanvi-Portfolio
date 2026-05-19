import React from 'react';
import './Projects.css';
import salesImg from "/Images/Sales.jpg";
import customerImg from "/Images/customer.jpg";
import portfolioImg from "/Images/portfolio1.jpg";
import coffeeShopImg from "/Images/coffee3.jpg";
import flowerShopImg from "/Images/flower1.jpg";
import galleryImg from "/Images/image1.jpg"; 

const projects = [
  {
    title: "Portfolio Website",
    imgSrc: portfolioImg,
    demoLink: "https://tanvi-portfolio-nine.vercel.app/",
<<<<<<< HEAD
    tech: "HTML, CSS, JavaScript, React",
=======
    tech: "HTML , CSS , Javascript , React",
>>>>>>> 8c04c5c12a9acda259a65d1d7eb36e41d5bd8d2b
    description: "Personal website showcasing projects and resume."
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
  {
    title: "Sales Performance Dashboard",
    imgSrc: salesImg,
    demoLink: "https://github.com/tanvi2203/sales-performance-dashboard",
    tech: "Excel, Power BI",
    description: "Interactive dashboard on 51,291 rows of retail data. Central region leads sales at ₹2.82M, Technology leads profit at 45%."
  },
  {
    title: "Customer Data Cleaning & Insights",
    imgSrc: customerImg,
    demoLink: "https://github.com/tanvi2203/customer-data-cleaning-insights",
    tech: "Python (pandas), SQL, MySQL",
    description: "Cleaned 2,240 customer records and ran SQL queries finding PhD customers spend 56x more than basic education customers."
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
  {project.demoLink.includes("github") ? "View Project" : "Live Demo"}
</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
