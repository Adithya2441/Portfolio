import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <a href={resumeData.profile.socials.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                    <a href={resumeData.profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${resumeData.profile.email}`}>
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background-color: var(--bg-secondary);
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          margin-top: 4rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-left p {
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }
        .footer-right {
          display: flex;
          gap: 1.5rem;
        }
        .footer-right a {
          color: var(--text-secondary);
        }
        .footer-right a:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
