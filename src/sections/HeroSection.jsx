import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">{resumeData.profile.name}</h1>
                    <h2 className="hero-role">{resumeData.profile.role}</h2>
                    <p className="hero-description">{resumeData.profile.summary}</p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero {
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          padding-top: var(--header-height);
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
        }

        .hero-container {
          display: flex;
          justify-content: flex-start;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-greeting {
          color: var(--accent);
          font-family: var(--font-heading);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .hero-role {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-tertiary);
          max-width: 600px;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background-color: var(--accent);
          color: white;
        }

        .btn-primary:hover {
          background-color: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--accent-glow);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background-color: var(--bg-secondary);
          border-color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
