import Section from '../components/Section';


const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a Machine Learning Engineer and Computer Science Master's student at the University of Southern California (USC, 3.77 GPA),
                        specializing in Agentic AI, Multimodal Deep Learning, and Cloud-Native Systems. I build end-to-end AI architectures that pair cutting-edge model research with high-performance production engineering.
                    </p>
                    <p>
                        Currently at <strong>Presaige (Northern Lights)</strong>, I develop autonomous Agentic AI frameworks using the Model Context Protocol (MCP) and engineer large-scale popularity-prediction ML pipelines processing millions of image and video data points (Unsplash, YouTube Shorts, TikTok) using PyTorch, FAISS, AWS SageMaker, and Google Gemini.
                        Previously at <strong>Mercedes-Benz R&D</strong>, I architected production RAG helpdesk systems powered by GPT-4o and engineered scalable microservice APIs serving thousands of users.
                    </p>
                    <p>
                        Beyond industry engineering, my research interests span Surgical Computer Vision (two-stream DINO-ViT temporal models for gesture and skill recognition) and low-level system design (building Raft consensus engines in C++20 and OS kernels from scratch). I thrive on tackling complex, high-impact challenges across the entire AI/ML and software engineering spectrum.
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
