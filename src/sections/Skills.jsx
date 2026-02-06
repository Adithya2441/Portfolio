import Section from '../components/Section';
import { resumeData } from '../data/resume';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="skills-grid">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                        <h3 className="category-title">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h3>
                        <div className="skill-list">
                            {items.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: transform 0.2s;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--text-secondary);
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          border-left: 3px solid var(--accent);
          padding-left: 0.75rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          font-size: 0.9rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--border);
        }
      `}</style>
        </Section>
    );
};

export default Skills;
