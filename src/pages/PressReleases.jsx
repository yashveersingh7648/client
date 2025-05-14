import React from 'react';
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const pressReleases = [
  {
    title: "TMT Plus at ARCHEX: An Architecture Exhibition",
    date: "November 24, 2023",
    description: "TMT PLUS, a top uPVC manufacturer, is showcasing its latest innovations at ARCHEX – a premier event for Architecture, Interiors, and Construction Materials. Explore cutting-edge designs and sustainable building solutions. Join us to witness the future of construction excellence.",
    link: "https://www.tmtplus.co.in/press_release/tmt-plus-invites-you-to-archex-an-ultimate-exhibition-on-architecture/",
    image: "/Images/pipe.jpg",
  },
  // ... (keep other press releases the same)
];

const PressReleases = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-section"
        style={{ backgroundImage: "url('https://www.tmtplus.co.in/wp-content/uploads/2025/01/press-breadcrumb-1.jpg')" }}
      >
        <div className="breadcrumb-container">
          <h1 className="breadcrumb-title">Press Release</h1>
          <nav className="breadcrumb-nav">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-link">Home</a>
              </li>
              <li className="breadcrumb-current">Press Release</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Press Release Section */}
      <section className="press-section">
        <div className="press-container">
          {/* Card Grid */}
          <div className="press-grid">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="press-card"
              >
                <a href={release.link} target="_blank" rel="noopener noreferrer">
                  <img src={release.image} alt={release.title} className="press-image" />
                </a>

                <div className="press-content">
                  <h2 className="press-title">
                    <a href={release.link} target="_blank" rel="noopener noreferrer">{release.title}</a>
                  </h2>
                  <div className="press-date">
                    <FaCalendarAlt className="date-icon" />
                    <span>{release.date}</span>
                  </div>
                  <p className="press-description">{release.description}</p>
                  <div className="press-button-container">
                    <a
                      href={release.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press-button"
                    >
                      Read More <FaArrowRight className="button-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PressReleases;