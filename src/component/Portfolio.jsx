import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cpu } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "AI Tutor",
      description: "MERN + LLM-powered intelligent learning assistant with personalized tutoring capabilities",
      tech: ["React", "Node.js", "MongoDB", "Express", "LLM Integration"],
      github: "https://github.com/Aswin-krishnam/AI-Tutor",
      live: null
    },
    {
      title: "Health Tracker",
      description: "Comprehensive health monitoring app tracking water intake, sleep, exercise, mood, and calories",
      tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      github: "https://github.com/Aswin-krishnam/health-tracker",
      live: null
    }
  ];

  const skills = {
    frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Redux"],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    ai: ["LLM Integration", "AI System Design", "Intelligent Systems"]
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">NightStack</h1>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActiveSection('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Aswin Krishna M</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer | MERN Specialist</h2>
          <p className="hero-description">
            Building scalable, efficient, and user-centric applications at the intersection 
            of web development and AI—specializing in LLM integration and intelligent system design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Aswin-krishnam" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aswin-krishna-m-85b9041a3/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aswinkrishnam01@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-icon">
            <Code size={120} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, 
              React.js, Node.js). With a strong focus on creating scalable and efficient web applications, 
              I bring ideas to life through clean code and intuitive user experiences.
            </p>
            <p>
              My expertise lies in building modern web applications with a particular interest in 
              AI integration, especially LLM-powered systems. I'm constantly exploring new technologies 
              and methodologies to create intelligent, user-centric solutions.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>238+</h3>
                <p>GitHub Contributions</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-item">
                <h3>MERN</h3>
                <p>Stack Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">
                <Code size={40} />
              </div>
              <h3>Frontend</h3>
              <ul>
                {skills.frontend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <Database size={40} />
              </div>
              <h3>Backend</h3>
              <ul>
                {skills.backend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <Cpu size={40} />
              </div>
              <h3>AI & Tools</h3>
              <ul>
                {skills.ai.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
                {skills.tools.slice(0, 2).map((skill, index) => (
                  <li key={`tool-${index}`}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-buttons">
            <a href="mailto:aswinkrishnam01@gmail.com" className="btn btn-primary">
              <Mail size={20} /> Send Email
            </a>
            <a href="https://www.linkedin.com/in/aswin-krishna-m-85b9041a3/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Aswin Krishna M. Built with React.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
