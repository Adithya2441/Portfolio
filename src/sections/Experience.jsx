import Section from '../components/Section';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="experience-list">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-card">

            <div className="card-header">
              <div className="header-left">
                <h3 className="role">{exp.role}</h3>
                <h4 className="company">{exp.company}</h4>
              </div>
              <div className="header-right">
                <div className="period-badge">
                  <Calendar size={14} /> {exp.period}
                </div>
                <div className="location">
                  <MapPin size={14} /> {exp.location}
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
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

      <style jsx>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .experience-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--text-secondary);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent);
          opacity: 0.7;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .role {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-weight: 700;
        }

        .company {
          font-size: 1.1rem;
          color: var(--accent);
          font-weight: 500;
        }

        .header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }

        .description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 90%;
        }

        .achievements {
          list-style: none;
          margin-bottom: 2rem;
        }

        .achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        .achievements li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 1.5rem;
          line-height: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-badge {
          font-size: 0.85rem;
          padding: 0.35rem 0.85rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border-radius: 6px;
          border: 1px solid transparent;
          transition: all 0.2s;
          font-family: var(--font-mono, monospace);
        }

        .experience-card:hover .tech-badge {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .card-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .header-right {
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: space-between;
          }
          .experience-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Experience;
