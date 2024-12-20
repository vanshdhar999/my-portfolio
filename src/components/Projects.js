import React from "react";
import "../css/Projects.css";

import stockPredictorImage from "../images/stock.png";
import movieLookupImage from "../images/movie.png";
import cryptoTrackerImage from "../images/crypto.png";
import selfCheckoutImage from "../images/selfcheckout.jpg";
import githubLogo from "../images/github.png";

const projects = [
  {
    title: "Paytm Clone",
    description:
      "Created a Paytm Clone, with back-end transaction system in JavaScript",
    image: stockPredictorImage,
    github: "https://github.com/vanshdhar999",
  },
  {
    title: "Textbook RAG",
    description:
      "Built a RAG system for textbooks with advanced querying and retrieval techniques. Find more about it in my LinkedIn post. ",
    image: movieLookupImage,
    github: "https://github.com/vanshdhar999",
  },
  {
    title: "Mental Health Chatbot",
    description:
      "Built a mental health assistant using Google Gemini API and Flask for backend. This was part of a Generative AI Hackathon hosted by Google.",
    image: cryptoTrackerImage,
    github: "https://github.com/vanshdhar999/Mental-Health-Chatbot",
  },
  {
    title: "College Bay",
    description:
      "Created a dummy E-Commerce platform for college students to sell and buy used items as a part of hackathon.",
    image: selfCheckoutImage,
    github:
      "https://github.com/vanshdhar999/College-ecommerce",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Portfolio</h2>
      <h3 className="projects-subheader">This section highlights some of the projects I have built as a part of hackathons and other events.</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
            </div>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
