import Section from '../components/Section';
import { resumeData } from '../data/resume';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="contact-content">
                <p className="contact-text">
                    I am currently looking for full-time Software Engineering roles.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href={`mailto:${resumeData.profile.email}`} className="email-button">
                    Say Hello <Mail size={20} />
                </a>
            </div>

            <style jsx>{`
        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 4rem 0;
        }

        .contact-text {
          color: var(--text-secondary);
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .email-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--bg-tertiary);
          color: var(--accent);
          padding: 1rem 3rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          border: 1px solid var(--accent);
          transition: all 0.2s ease;
        }

        .email-button:hover {
          background-color: rgba(59, 130, 246, 0.1);
          transform: translateY(-3px);
        }
      `}</style>
        </Section>
    );
};

export default Contact;
