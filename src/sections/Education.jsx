import Section from '../components/Section';
import { resumeData } from '../data/resume';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className="education-list">
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="edu-item">
                        <div className="edu-header">
                            <h3 className="institution">{edu.institution}</h3>
                            <span className="period">{edu.period}</span>
                        </div>
                        <div className="degree-row">
                            <p className="degree">{edu.degree}</p>
                            <span className="gpa">GPA: {edu.gpa}</span>
                        </div>
                        {edu.courses && (
                            <div className="courses">
                                <span className="courses-label">Key Courses: </span>
                                {edu.courses.join(', ')}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .education-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .edu-item {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .institution {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .period {
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }

        .degree-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .degree {
          color: var(--accent);
          font-weight: 500;
        }

        .gpa {
          color: var(--text-secondary);
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }

        .courses {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .courses-label {
          color: var(--text-primary);
          font-weight: 500;
        }
      `}</style>
        </Section>
    );
};

export default Education;
