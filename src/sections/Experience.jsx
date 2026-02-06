import Section from '../components/Section';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div className="timeline">
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="exp-header">
                                <div>
                                    <h3 className="company">{exp.company}</h3>
                                    <p className="role">{exp.role}</p>
                                </div>
                                <div className="meta">
                                    <div className="meta-item">
                                        <Calendar size={14} /> <span>{exp.period}</span>
                                    </div>
                                    <div className="meta-item location">
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="description">{exp.description}</p>
                            <ul className="achievements">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className="tech-stack">
                                {exp.techStack.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid var(--border);
        }

        .timeline-item {
          margin-bottom: 4rem;
          position: relative;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -2.6rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--accent);
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .company {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .role {
          font-size: 1.1rem;
          color: var(--accent);
          font-weight: 500;
        }

        .meta {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-tertiary);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }

        .achievements {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          background: var(--bg-tertiary);
          border-radius: 15px;
          color: var(--text-secondary);
        }
      `}</style>
        </Section>
    );
};

export default Experience;
