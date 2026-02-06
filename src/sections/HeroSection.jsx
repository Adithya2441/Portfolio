import { ArrowRight, Download, Mail } from 'lucide-react';
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
            <a href="/Portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" aria-label="Download Resume PDF">
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: var(--header-height);
          background: radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
        }

        .hero-container {
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .hero-content {
          max-width: 800px;
          animation: fadeIn 0.8s ease-out;
        }

        .hero-greeting {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
          letter-spacing: 0.05em;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.1;
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
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background-color: var(--accent);
          color: white;
          border: 1px solid var(--accent);
        }

        .btn-primary:hover {
          background-color: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background-color: var(--bg-secondary);
          border-color: var(--text-secondary);
          transform: translateY(-2px);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
