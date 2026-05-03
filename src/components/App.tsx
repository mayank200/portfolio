import React from 'react';
import { resumeData } from '@/data';

function App() {
  return (
    <>
      <style type="text/css">
        {`
          @media print {
            @page {
              margin: 0;
            }
          }
        `}
      </style>
      <div className="bg-white max-w-[850px] mx-auto min-h-[1100px] shadow-lg print:shadow-none p-10 md:p-14 print:px-14 print:py-12 text-black leading-snug font-serif">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-1 tracking-wide">{resumeData.header.name}</h1>
        <div className="text-[13px] flex flex-wrap justify-center gap-x-4 mb-1">
          <span>Phone: {resumeData.details.phone}</span>
          <span>Email: <a href={`mailto:${resumeData.details.email}`} className="text-blue-600 hover:underline">{resumeData.details.email}</a></span>
        </div>
        <div className="text-[13px] flex flex-wrap justify-center gap-x-4 mb-1">
          {resumeData.links.map((link, idx) => (
            <span key={idx}>
              {link.label}: <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{link.url.replace(/^https?:\/\//, '')}</a>
            </span>
          ))}
        </div>
        <div className="text-[13px] mt-2 font-medium">
          {resumeData.header.title.split('|').map(t => t.trim()).join(' — ')}
        </div>
      </div>

      {/* Profile */}
      {resumeData.profile && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Professional Summary</h2>
          <p className="text-[13px] text-justify">{resumeData.profile}</p>
        </div>
      )}

      {/* Technical Skills */}
      {resumeData.technicalSkills && resumeData.technicalSkills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Technical Skills</h2>
          <div className="text-[13px]">
            {resumeData.technicalSkills.map((skill, idx) => (
              <div key={idx} className="mb-0.5">
                <span className="font-bold">{skill.category}:</span> {skill.items}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {resumeData.employment && resumeData.employment.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Professional Experience</h2>
          {resumeData.employment.map((job, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[13px] font-bold">{job.title}</span>
                <span className="text-[13px]">{job.date}</span>
              </div>
              <div className="text-[13px] mb-1">{job.company}</div>
              <ul className="list-disc pl-5 text-[13px] space-y-0.5 text-justify">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet.replace(/^[•-]\s*/, '') }}></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Internships */}
      {resumeData.internships && resumeData.internships.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Internships</h2>
          {resumeData.internships.map((job, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[13px] font-bold">{job.title}</span>
                <span className="text-[13px]">{job.date}</span>
              </div>
              <div className="text-[13px] mb-1">{job.company}</div>
              <ul className="list-disc pl-5 text-[13px] space-y-0.5 text-justify">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet.replace(/^[•-]\s*/, '') }}></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Projects</h2>
          {resumeData.projects.map((proj, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[13px]"><span className="font-bold">{proj.name}</span> — {proj.tech}</span>
              </div>
              <ul className="list-disc pl-5 text-[13px] space-y-0.5 text-justify">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet.replace(/^[•-]\s*/, '')}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Education</h2>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-between items-baseline">
                <span className="text-[13px] font-bold">{edu.degree}</span>
                <span className="text-[13px]">{edu.date}</span>
              </div>
              <div className="text-[13px]">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Courses */}
      {resumeData.courses && resumeData.courses.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Courses & Training</h2>
          {resumeData.courses.map((course, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-between items-baseline">
                <span className="text-[13px] font-bold">{course.name}</span>
                <span className="text-[13px]">{course.date}</span>
              </div>
              <div className="text-[13px]">{course.institution}</div>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {resumeData.certifications && resumeData.certifications.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[15px] font-bold mb-1">Certifications</h2>
          <ul className="list-disc pl-5 text-[13px] space-y-0.5">
            {resumeData.certifications.map((cert, idx) => (
              <li key={idx}>
                <span className="font-bold">{cert.name}</span>
                {cert.institution ? `, ${cert.institution}` : ''}
                {cert.date ? ` (${cert.date})` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
    </>
  );
}

export default App;
