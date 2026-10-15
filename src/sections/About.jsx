import Section from '../components/Section';


const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a Machine Learning Engineer and Computer Science Master's student at the University of Southern California (USC, 3.78 GPA),
                        specializing in GPU Inference, MLOps, and Generative & Agentic AI. I build ML systems that hold up in production: high-throughput inference pipelines, large-scale data workflows, and GenAI features that actually ship.
                    </p>
                    <p>
                        Currently at <strong>Presaige</strong>, I work across the path from model to customer: built the GPU inference worker for bulk image scoring on SageMaker Batch Transform (600+ images/s, 0 failures across 600K images),
                        root-caused silent TF32 precision drift on A10G GPUs, shipped a Gemini thumbnail generator to production, and built an MCP-based agentic layer for real-time content recommendations.
                        Before USC I spent ~1.5 years at <strong>Mercedes-Benz R&D India</strong> building GPT-4o features, a multimodal RAG chatbot for car manuals, and Java enterprise features.
                    </p>
                    <p>
                        Beyond industry engineering, my research interests span Surgical Computer Vision (two-stream DINO-ViT temporal models for gesture and skill recognition) and low-level system design (building Raft consensus engines in C++20 and OS kernels from scratch).
                        I also serve as a Teaching Assistant for Machine Learning for Data Science at USC. I thrive on tackling complex, high-impact challenges across the entire AI/ML and software engineering spectrum.
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
