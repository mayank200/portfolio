import Head from "next/head";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { resumeData } from "@/data";
import App from "@/components/App";

export default function Resume() {
  return (
    <>
    <div className="block print:hidden">
    <Container title="Resume | Mayank Sharma">
      <section className="mt-40 mb-32 flex w-full flex-col xl:min-h-screen">
        <div className="mx-auto flex w-full max-w-4xl flex-col px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-gradient clash-grotesk">
                {resumeData.header.name}
              </h1>
              <p className="mt-4 text-primary text-xl font-medium">
                {resumeData.header.title}
              </p>
              <div className="mt-4 text-sm text-muted-foreground flex flex-col md:flex-row flex-wrap md:space-x-4 gap-y-2">
                <span>{resumeData.details.email}</span>
                <span className="hidden md:inline">•</span>
                <span>{resumeData.details.phone}</span>
                {resumeData.links.map(link => (
                  <span key={link.label} className="flex items-center space-x-4">
                    <span className="hidden md:inline">•</span>
                    <a href={link.url} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
            
            <Button onClick={() => window.print()} className="mt-6 md:mt-0 flex items-center space-x-2">
              <Download size={18} />
              <span>Download PDF</span>
            </Button>
          </div>

          <div className="space-y-12">
            
            {/* Profile */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">Profile</h2>
              <p className="text-muted-foreground leading-relaxed">
                {resumeData.profile}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">Experience</h2>
              <div className="space-y-8">
                {resumeData.employment.map((job, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-medium text-foreground">{job.title}</h3>
                      <span className="text-green-400 font-mono text-sm">{job.date}</span>
                    </div>
                    <h4 className="text-primary mb-4">{job.company}</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            {resumeData.internships && resumeData.internships.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">Internships</h2>
                <div className="space-y-8">
                  {resumeData.internships.map((internship, idx) => (
                    <div key={idx}>
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-medium text-foreground">{internship.title}</h3>
                        <span className="text-green-400 font-mono text-sm">{internship.date}</span>
                      </div>
                      <h4 className="text-primary mb-4">{internship.company}</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                        {internship.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {resumeData.projects && resumeData.projects.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">Projects</h2>
                <div className="space-y-6">
                  {resumeData.projects.map((project, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-md">
                      <h3 className="text-lg font-medium text-foreground mb-1">{project.name}</h3>
                      <p className="text-sm font-mono text-green-400 mb-4">{project.tech}</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                        {project.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.technicalSkills.map((skill, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-md text-left">
                    <h4 className="font-semibold text-primary mb-2">{skill.category}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Courses */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">Education & Courses</h2>
              <div className="space-y-6">
                {/* Degrees */}
                {resumeData.education.map((edu, idx) => (
                  <div key={`edu-${idx}`} className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="text-green-400 font-mono text-sm mt-1 md:mt-0">{edu.date}</span>
                  </div>
                ))}
                
                {/* Courses */}
                {resumeData.courses && resumeData.courses.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-primary mb-4">Certifications & Training</h3>
                    <div className="space-y-4">
                      {resumeData.courses.map((course, idx) => (
                        <div key={`course-${idx}`} className="flex flex-col md:flex-row justify-between">
                          <div>
                            <h4 className="font-medium text-foreground">{course.name}</h4>
                            <p className="text-sm text-muted-foreground">{course.institution}</p>
                          </div>
                          <span className="text-green-400 font-mono text-sm mt-1 md:mt-0">{course.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Container>
    </div>
    <div className="hidden print:block">
      <App />
    </div>
    </>
  );
}
