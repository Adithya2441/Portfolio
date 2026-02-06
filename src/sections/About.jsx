import Section from '../components/Section';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a Software Engineer and Master's student in Computer Science at the University of Southern California (USC),
                        specializing in Artificial Intelligence and Machine Learning. With a strong foundation in Full-Stack Development
                        and scalable System Design, I bridge the gap between complex algorithms and user-centric applications.
                    </p>
                    <p>
                        Previously at Mercedes-Benz R&D, I led initiatives integrating Generative AI into enterprise workflows,
                        showcasing my ability to deliver high-impact solutions. My expertise extends to Cloud-Native architectures,
                        Microservices, and Distributed Systems.
                    </p>
                    <p>
                        I am passionate about building intelligent systems that solve real-world problems. Whether it's optimizing
                        ML pipelines or architecting robust backend services, I thrive in challenging environments that push the boundaries of technology.
                    </p>
                </div>
            </div>
            <style jsx>{`
        .about-text {
          max-width: 800px;
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        .about-text p {
          margin-bottom: 1.5rem;
        }
      `}</style>
        </Section>
    );
};

export default About;
