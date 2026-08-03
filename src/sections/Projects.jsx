import { useState } from 'react';
import Section from '../components/Section';
import { resumeData } from '../data/resume';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredLimit = 3;
  const displayedProjects = showAll ? resumeData.projects : resumeData.projects.slice(0, featuredLimit);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <article key={index} className="project-card">

            <div className="card-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="card-actions">
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="card-body">
              <p className="description">{project.description}</p>

              {project.caseStudy && (
                <div className="case-study">
                  <div className="study-item">
                    <span className="label">Problem:</span> {project.caseStudy.problem}
                  </div>
                  <div className="study-item">
                    <span className="label">Solution:</span> {project.caseStudy.solution}
                  </div>
                  <div className="study-item highlight">
                    <span className="label">Impact:</span> {project.caseStudy.impact}
                  </div>
                </div>
              )}
            </div>

            <div className="card-footer">
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

          </article>
        ))}
      </div>

      {resumeData.projects.length > featuredLimit && (
        <div className="show-more-container">
          <button
            className="btn-show-more"
            onClick={() => setShowAll(!showAll)}
            aria-label={showAll ? "Show fewer projects" : "Show more projects"}
          >
            {showAll ? (
              <>Show Less <ChevronUp size={18} /></>
            ) : (
              <>Show More Projects <ChevronDown size={18} /></>
            )}
          </button>
        </div>
      )}

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .card-actions a {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .card-actions a:hover {
          color: var(--accent);
        }

        .description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .case-study {
          background: rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .study-item {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .study-item:last-child {
          margin-bottom: 0;
        }

        .study-item .label {
          color: var(--text-primary);
          font-weight: 600;
          margin-right: 0.5rem;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        .highlight {
          color: var(--text-primary);
          border-left: 2px solid var(--accent);
          padding-left: 0.75rem;
        }

        .card-body {
          flex-grow: 1;
        }

        .card-footer {
          margin-top: auto;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          font-family: var(--font-mono, monospace);
        }

        .show-more-container {
          display: flex;
          justify-content: center;
        }

        .btn-show-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border-radius: 8px;
          font-weight: 500;
          transition: background 0.2s;
        }

        .btn-show-more:hover {
          background: var(--border);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default Projects;
