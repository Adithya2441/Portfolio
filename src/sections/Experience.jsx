import Section from '../components/Section';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="timeline">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">

              <div className="exp-header">
                <div className="role-company">
                  <h3 className="role">{exp.role}</h3>
                  <a href="#" className="company">{exp.company}</a>
                </div>
                <div className="meta-info">
                  <span className="badge-period">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="badge-location">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              <ul className="achievements">
                {exp.achievements.map((item, i) => {
                  // Bold key terms if needed, handled via resumeData markdown or just plain text
                  // Render markdown-like bolding simply by replacing **
                  const parts = item.split(/(\*\*.*?\*\*)/g);
                  return (
                    <li key={i}>
                      {parts.map((part, j) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={j} className="text-highlight">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </li>
                  );
                })}
              </ul>

              <div className="tech-stack">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }

        .timeline-item {
          position: relative;
          padding-left: 2.5rem;
          margin-bottom: 4rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -5px;
          top: 6px;
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
        }

        .timeline-content {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .timeline-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border-color: var(--text-secondary);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .role {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .company {
          font-size: 1.1rem;
          color: var(--accent);
          font-weight: 500;
        }

        .meta-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .badge-period, .badge-location {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          font-family: var(--font-mono, monospace);
        }

        .badge-period {
          color: var(--text-primary);
          font-weight: 600;
        }

        .description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .achievements {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 1.2rem;
          line-height: 1.2;
        }

        .text-highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .tech-badge {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          border: 1px solid transparent;
          font-family: var(--font-mono, monospace);
        }

        @media (max-width: 768px) {
           .exp-header {
             flex-direction: column;
           }
           .meta-info {
             flex-direction: row;
             align-items: center;
             width: 100%;
             justify-content: flex-start;
           }
            .timeline::before {
             left: 10px;
           }
            .timeline-item {
              padding-left: 2rem;
            }
            .timeline-marker {
              left: 5px;
            }
        }
      `}</style>
    </Section>
  );
};

export default Experience;
