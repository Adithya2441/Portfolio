import Section from '../components/Section';
import { resumeData } from '../data/resume';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="card-header">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="card-actions">
                                {/* Placeholder links, ideally would come from data */}
                                <a href="#" className="card-link" aria-label="GitHub Repo">
                                    <Github size={18} />
                                </a>
                                <a href="#" className="card-link" aria-label="Live Demo">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="tech">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
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
        }

        .card-actions {
          display: flex;
          gap: 1rem;
        }

        .card-link {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .card-link:hover {
          color: var(--accent);
        }

        .project-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: auto;
        }

        .tech {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          font-family: var(--font-mono, monospace);
        }
      `}</style>
        </Section>
    );
};

export default Projects;
