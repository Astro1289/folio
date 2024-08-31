import React, { useState, useEffect } from 'react';
import Card from './Card';
import Tabs from './Tabs'; // Import the Tabs component
import './MainSection.css';

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('reveal');
      }, index * 100); // Delay the reveal of each card
    });
  }, [activeTab]);

  const renderCards = () => {
    let cards = [];

    if (activeTab === 'all' || activeTab === 'about') {
      // About Card
      cards.push(
        <Card className="about-card" key="about-card">
          <div className="card-content">
            <img src="/abhinav_profile.jpg" alt="Profile Icon" />
            <div>
              <h4>Hi, I'm Abhinav</h4>
              <p>
                Software Engineer dedicated to creating intuitive and visually appealing user interfaces. I focus on turning ideas into clear, user-friendly designs that enhance the overall experience.
              </p>
            </div>
          </div>
        </Card>
      );

      // Skills Card
      cards.push(
        <Card title="Skills" className="skills-card" key="skills-card">
          <div className="skills-icons">
            <img src="angular_logo.svg" alt="Angular Icon" title="Angular" />
            <img src="react_logo.svg" alt="React.js Icon" title="React.js" />
            <img src="javascript_logo.svg" alt="JavaScript Icon" title="JavaScript" />
            <img src="typescript_logo.svg" alt="Typescript Icon" title="Typescript" />
            <img src="jquery_logo.svg" alt="jQuery Icon" title="jQuery" />
            <img src="html_logo.svg" alt="HTML Icon" title="HTML" />
            <img src="css_logo.svg" alt="CSS Icon" title="CSS" />
            <img src="bootstrap_logo.svg" alt="Bootstrap Icon" title="Bootstrap" />
            <img src="sql_logo.svg" alt="SQL Icon" title="SQL" />
            <img src="nodejs_logo.svg" alt="Node.js Icon" title="Node.js" />
            <img src="python_logo.svg" alt="Python Icon" title="Python" />
            <img src="docker_logo.svg" alt="Docker Icon" title="Docker" />
          </div>
        </Card>
      );

      // Certificates and Experience Container
      cards.push(
        <div className="certificates-experience-container" key="cert-exp-container">
          <Card title="Certificates" className="certificates-card" key="certificates-card">
            <div className="cert-link-container">
              <a href="https://www.hackerrank.com/certificates/d48784dd6413" target="_blank" rel="noopener noreferrer">
                Frontend Developer (React) Certificate
              </a>
            </div>
            <div className="cert-link-container">
              <a href="https://www.hackerrank.com/certificates/c3ae7db81b46" target="_blank" rel="noopener noreferrer">
                React (Basic) Certificate
              </a>
            </div>
            <div className="cert-link-container">
              <a href="https://www.hackerrank.com/certificates/b63fe14db229" target="_blank" rel="noopener noreferrer">
                Angular (Intermediate) Certificate
              </a>
            </div>
            <div className="cert-link-container">
              <a href="https://www.hackerrank.com/certificates/734aea618165" target="_blank" rel="noopener noreferrer">
                Angular (Basic) Certificate
              </a>
            </div>
            <div className="cert-link-container">
              <a href="https://www.hackerrank.com/certificates/348454a7388e" target="_blank" rel="noopener noreferrer">
                Python (Basic) Certificate
              </a>
            </div>
          </Card>
          <Card title="Experience" className="experience-card" key="experience-card">
            <p>Total Experience: 4 years</p>
            <ul>
              <li>Company A: Software Engineer (2020 - 2022)</li>
              <li>Company B: Front-End Developer (2018 - 2019)</li>
            </ul>
          </Card>
        </div>
      );

      // Social Links (LinkedIn and GitHub)
      cards.push(
        <div className="social-container" key="social-container">
          <Card className="image-only-card linkedin-card" key="linkedin-card">
            <img src="linkedin_logo.svg" alt="LinkedIn" />
          </Card>
          <Card className="image-only-card github-card" key="github-card">
            <img src="github_logo.svg" alt="GitHub" />
          </Card>
        </div>
      );

      // Projects Card
      cards.push(
        <Card title="Projects" className="projects-card" key="projects-card">
          {/* Replace this comment with your Projects content */}
          <p>Here you can showcase your projects. Add details, links, and descriptions as needed.</p>
        </Card>
      );
    }

    // Theme Toggle Card
    cards.push(
      <Card title="Theme Toggle" className="theme-toggle-card" key="theme-toggle-card">
        <button onClick={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </Card>
    );

    return cards;
  };

  return (
    <div>
      <Tabs onChange={handleTabChange} />
      <div className="cards-container">
        {renderCards()}
      </div>
    </div>
  );
};

export default MainSection;
