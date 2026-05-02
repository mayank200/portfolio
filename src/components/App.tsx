import React from 'react';
import { resumeData } from '@/data';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <button className="download-btn" onClick={handlePrint}>
        Download PDF
      </button>
      <div className="resume-page">
        
        {/* Header */}
        <div className="resume-header">
          <h1 className="name-header">{resumeData.header.name}</h1>
          <h2 className="title-header">{resumeData.header.title}</h2>
          
          <div className="contact-row">
            <span className="contact-item">{resumeData.details.phone}</span>
            <a className="contact-item" href={`mailto:${resumeData.details.email}`}>
              {resumeData.details.email}
            </a>
          </div>
          <div className="contact-row" style={{ marginTop: '2px', fontSize: '15px' }}>
            {resumeData.links.map((link, idx) => (
              <a key={idx} className="contact-item" href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <hr className="double-rule" />
        </div>

        {/* Single Column Body */}
        <div className="resume-body-single">
          
          {/* PROFILE */}
          {resumeData.profile && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>PROFILE</span></h3>
              </div>
              <p className="profile-text">{resumeData.profile}</p>
              <hr className="double-rule" />
            </div>
          )}

          {/* EMPLOYMENT HISTORY */}
          {resumeData.employment && resumeData.employment.length > 0 && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>EMPLOYMENT HISTORY</span></h3>
              </div>
              {resumeData.employment.map((job, idx) => (
                <div key={idx} className="item-block">
                  <div className="job-header">
                    <span className="job-title-company">
                      &#10022; <strong>{job.title}, {job.company}</strong>
                    </span>
                    <div className="leader"></div>
                    <span className="job-date">{job.date}</span>
                  </div>
                  <ul>
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="bullet-item">
                        <span dangerouslySetInnerHTML={{ __html: bullet.replace(/^[•-]\s*/, '').replace(/Node\.js, TypeScript, GIT, JavaScript and Azure/g, '<strong>Node.js, TypeScript, GIT, JavaScript and Azure</strong>').replace(/team management/gi, '<strong>team management</strong>').replace(/client relationships/gi, '<strong>client relationships</strong>') }}></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {resumeData.education && resumeData.education.length > 0 && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>EDUCATION</span></h3>
              </div>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="item-block">
                  <div className="job-header">
                    <span className="job-title-company">
                      &#10022; <strong>{edu.degree}</strong>, {edu.school}
                    </span>
                    <div className="leader"></div>
                    <span className="job-date">{edu.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INTERNSHIPS */}
          {resumeData.internships && resumeData.internships.length > 0 && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>INTERNSHIPS</span></h3>
              </div>
              {resumeData.internships.map((job, idx) => (
                <div key={idx} className="item-block">
                  <div className="job-header">
                    <span className="job-title-company">
                      &#10022; <strong>{job.title}, {job.company}</strong>
                    </span>
                    <div className="leader"></div>
                    <span className="job-date">{job.date}</span>
                  </div>
                  <ul>
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="bullet-item">
                        {bullet.replace(/^[•-]\s*/, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS */}
          {resumeData.projects && resumeData.projects.length > 0 && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>PROJECTS</span></h3>
              </div>
              {resumeData.projects.map((proj, idx) => (
                <div key={idx} className="item-block">
                  <div className="job-header">
                    <span className="job-title-company">
                      &#10022; <strong>{proj.name}</strong> | {proj.tech}
                    </span>
                    <div className="leader"></div>
                  </div>
                  <ul>
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="bullet-item">
                        {bullet.replace(/^[•-]\s*/, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* COURSES */}
          {resumeData.courses && resumeData.courses.length > 0 && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>COURSES</span></h3>
              </div>
              {resumeData.courses.map((course, idx) => (
                <div key={idx} className="item-block">
                  <div className="job-header">
                    <span className="job-title-company">
                      &#10022; <strong>{course.name}</strong>, {course.institution}
                    </span>
                    <div className="leader"></div>
                    <span className="job-date">{course.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TECHNICAL SKILLS */}
          {resumeData.technicalSkills && resumeData.technicalSkills.length > 0 && (
            <div className="section">
              <div className="section-title-wrapper">
                <h3><span>TECHNICAL SKILLS</span></h3>
              </div>
              <ul>
                {resumeData.technicalSkills.map((skill, idx) => (
                  <li key={idx} style={{ paddingLeft: '0', listStyleType: 'none', marginBottom: '8px' }}>
                    <strong>{skill.category}:</strong> {skill.items}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
