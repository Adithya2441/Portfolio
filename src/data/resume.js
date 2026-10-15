export const resumeData = {
    profile: {
        name: "Adithya Sudhindra",
        role: "Machine Learning Engineer | AI/ML Specialist",
        summary: "Machine Learning Engineer & MS CS student at USC (3.78 GPA) specializing in GPU Inference, MLOps, and Generative & Agentic AI. Currently building high-throughput inference pipelines, popularity models, and production GenAI features at Presaige on AWS SageMaker, with prior experience engineering GPT-4o solutions and enterprise microservices at Mercedes-Benz R&D.",
        email: "asudhind@usc.edu",
        location: "Los Angeles, CA",
        socials: {
            github: "https://github.com/Adithya2441",
            linkedin: "https://www.linkedin.com/in/adithya-sudhindra/",
        }
    },
    experience: [
        {
            company: "Presaige",
            role: "Machine Learning Engineer Intern",
            period: "Jan 2026 – Present",
            location: "Los Angeles, CA",
            description: "Building ML infrastructure, popularity models and GenAI features for Presaige's content-scoring platform on AWS SageMaker.",
            achievements: [
                "**High-Throughput Batch Inference:** Built the GPU inference worker for a bulk image-scoring pipeline on **AWS SageMaker Batch Transform**, sustaining **600+ images/s** per instance (**2.1M/hour**); raised throughput **69%** via concurrency tuning with **0 failures across 600K** images.",
                "**Fault Tolerance & Testing:** Designed contract-tested batch I/O against a versioned API contract, turning bad inputs into typed failure rows (**9 error codes**) for **0 failures across 600K** images; added byte-reproducible builds and a **pytest/moto** regression suite.",
                "**Production Debugging:** Merged two CPU endpoints into one batched **GPU** service; root-caused silent **TF32** precision drift on A10G GPUs, cutting embedding error **~1,100×** for **100% score agreement**; traced silent batch-job failures to an undocumented **TorchServe** payload limit.",
                "**Cloud Cost Optimization:** Deployed and tuned **SageMaker** real-time, async and serverless endpoints; fixed autoscaling that blocked scale-to-zero, saving **$3K/month**, and cut 10K-image job time **2.7×** via request batching.",
                "**Popularity Modeling:** Trained **MLP** engagement classifiers on frozen **ResNet**, **X-CLIP** and **SigLIP2** embeddings across **6.15M** images and **320K** TikTok videos, reaching **67% test accuracy** (50% baseline).",
                "**Production GenAI Features:** Shipped a **Gemini** thumbnail generator (**4 thumbnails/video** in under **1 min**) via async **Celery** workers in a **Django** app, backed by a **34-test** pytest suite; built an **MCP**-based agentic layer for real-time trend recommendations.",
                "**Concurrent Data Pipelines:** Built resumable, checkpointed pipelines collecting **320K** videos; rewrote embedding extraction from threads to processes to bypass the Python **GIL**, raising throughput **16×**.",
                "**Score Validation:** Validated the popularity score with a **FAISS** similarity-matched pairwise framework (Wilson 95% CIs) over **1.25M** images and **2M+** Reels; **250K+** comparisons, agreement rising to **77%** at large score gaps.",
                "**Secure On-Prem Deployment (Ongoing):** Designing an offline, customer-hosted release with **AES-256-GCM** encrypted model artifacts, hardware-bound signed licensing, **Nuitka**-compiled loader, **ONNX/TensorRT** inference."
            ],
            techStack: ["AWS SageMaker", "Python", "PyTorch", "TorchServe", "FAISS", "Gemini API", "Django", "Celery", "MCP", "ONNX", "TensorRT", "Docker"]
        },
        {
            company: "University of Southern California",
            role: "Graduate Teaching Assistant (Course Producer)",
            period: "Jun 2026 – Sep 2026",
            location: "Los Angeles, CA",
            description: "Course Producer for DSCI 552: Machine Learning for Data Science.",
            achievements: [
                "Mentored students in machine learning topics including supervised learning, model evaluation, feature engineering, and predictive analytics.",
                "Facilitated office hours and discussion forums, providing guidance on coursework, assignments, and practical ML applications.",
                "Partnered with the course staff to support instruction and ensure effective communication across a large graduate-level class.",
                "Helped students bridge theoretical ML concepts with real-world data science problem-solving techniques."
            ],
            techStack: ["Machine Learning", "Python", "Scikit-learn", "Teaching"]
        },
        {
            company: "Mercedes-Benz Research and Development India",
            role: "Consultant (Software Developer)",
            period: "Jul 2023 – Dec 2024",
            location: "Bengaluru, India",
            description: "Contributed to a mission-critical Java enterprise application serving thousands of global users, focusing on AI integration and system modernization.",
            achievements: [
                "**Legacy Platform Modernization:** Modernized a **17-year-old Java EE** enterprise platform with Generative AI features built on **GPT-4o**, Ada API and **Django**, including image querying and voice input.",
                "**Documentation Automation:** Automated documentation generation in in-house platforms with **GPT-4o** and Ada API, increasing documentation PDF engagement by **30%** and streamlining support workflows.",
                "**Enterprise Features:** Designed, implemented, and deployed **15+** scalable full-stack features for a distributed **Java** enterprise system using **JDBC**, **EJB**, and **Primefaces**, serving thousands of global users.",
                "**Pipeline Optimization:** Optimized model delivery pipelines and codebase, delivering an **18%** increase in processing efficiency through targeted refactoring and performance tuning.",
                "**Multimodal RAG Chatbot:** Developed and pitched a novel **LLM-based Streamlit chatbot** for Mercedes-Benz car manuals; users upload images of car components and get manual-grounded answers via GPT-4o and Ada API."
            ],
            techStack: ["Java", "GPT-4o", "Django", "Streamlit", "RAG", "Docker", "Jenkins", "PostgreSQL"]
        },
        {
            company: "Saigeware Technologies",
            role: "Data Science Intern",
            period: "Feb 2023 – Apr 2023",
            location: "Bengaluru, India",
            description: "Led the development of multimodal machine learning pipelines for healthcare diagnostics.",
            achievements: [
                "Developed a custom ensemble model combining **Random Forest** and **CNNs** for multimodal healthcare data, improving diagnostic accuracy from **55% to 75%**.",
                "Built robust **ETL pipelines** to ingest and process a **1.2 billion+** record US healthcare dataset, automating reporting workflows and reducing manual data handling by **30%**.",
                "Implemented **VAE (Variational Autoencoder)** models to extract latent features from clinical imagery, enhancing risk factor identification for early intervention.",
                "Designed and verified predictive analytics dashboards for stroke risk assessment, directly supporting clinical decision-making processes."
            ],
            techStack: ["Python", "PyTorch", "TensorFlow", "Pandas", "Computer Vision", "ETL"]
        },
        {
            company: "BETSOL",
            role: "Software Engineer Trainee",
            period: "Jun 2022 – Jul 2022",
            location: "Bengaluru, India",
            description: "Focused on backend development and API architecture for Zmanda, an enterprise backup solution available in 45+ countries.",
            achievements: [
                "Optimized backend performance for the Zmanda Management Console, resolving critical bottlenecks and improving backup reliability for enterprise clients.",
                "Designed and implemented RESTful APIs using **Django**, ensuring high availability and seamless integration for third-party partners.",
                "Authored comprehensive **Swagger/OpenAPI** documentation for **250+ endpoints**, reducing knowledge transfer time for new developers by **40%**.",
                "Collaborated on critical bug fixes and stability improvements, achieving **100% production integrity** during the internship tenure."
            ],
            techStack: ["Python", "Django", "REST APIs", "Linux", "Postman"]
        }
    ],
    education: [
        {
            institution: "University of Southern California",
            u: "USC",
            degree: "Master of Science in Computer Science",
            period: "Jan 2025 – Dec 2026",
            gpa: "3.78/4.0",
            courses: ["Analysis of Algorithms", "Machine Learning for Data Science", "Applied NLP", "Foundations of AI", "Operating Systems", "Distributed Systems", "Information Retrieval and Web Search Engines", "Agentic AI"]
        },
        {
            institution: "JSS Academy of Technical Education",
            degree: "Bachelor of Engineering in Computer Science",
            period: "Aug 2019 – Jun 2023",
            gpa: "9.24/10.0"
        }
    ],
    projects: [
        {
            title: "Cloud-Deployed Agentic AI Assistant",
            description: "Cloud Run-ready LangGraph agent with MCP tools, session memory, FastAPI, Docker, and Google Cloud Run deployment.",
            caseStudy: {
                problem: "Building AI agents that dynamically discover and chain tools at runtime across multiple MCP servers, with fault isolation and session-scoped memory, remains a complex integration challenge.",
                solution: "Built a LangGraph agent that discovers, invokes and chains tools across 3 MCP servers (sandboxed filesystem, Tavily web search, weather), with session-scoped memory via LangGraph checkpointing and per-server fault isolation.",
                impact: "Deployed via FastAPI as a non-root Docker image on Google Cloud Run, validated on NVIDIA NIM and OpenAI with 11 automated tests; path-traversal-safe file access and graceful MCP failure handling."
            },
            techStack: ["Python", "LangGraph", "MCP", "FastAPI", "Docker", "Google Cloud Run"],
            link: "https://github.com/Adithya2441/agentic-ai-mcp-assistant"
        },
        {
            title: "Surgical AI — Surgical Skill & Gesture Recognition",
            description: "Surgical video AI research replicating and extending SAIS and ZEN architectures to recognize gestures, subphases, and surgeon skill level.",
            caseStudy: {
                problem: "Surgical video models often overfit to specific surgeon habits rather than generalizing gesture and skill recognition across operators.",
                solution: "Engineered a two-stream DINO-ViT temporal architecture evaluated with Leave-One-User-Out CV and multi-teacher knowledge distillation.",
                impact: "Achieved 0.987 needle subphase mean PPV and discovered gesture-trained representations implicitly encode surgeon skill (AUC up to 1.0)."
            },
            techStack: ["PyTorch", "DINO-ViT", "ResNet50", "BiomedCLIP", "Computer Vision"],
            link: "https://github.com/Adithya2441/surgical-ai"
        },
        {
            title: "RaftScope — Distributed Consensus Engine",
            description: "From-scratch implementation of the Raft consensus algorithm in C++20 featuring real-time cluster visualization and high-throughput replication.",
            caseStudy: {
                problem: "Consensus protocols are complex to debug due to non-deterministic message ordering and split-vote edge cases across cluster nodes.",
                solution: "Built a C++20/gRPC Raft state machine with Lamport clock event logging, a D3.js visualizer, and condition-variable thread synchronization.",
                impact: "Eliminated replication polling bottlenecks to reach ~30,000 ops/sec throughput (ranked 13/47) with a 98/100 KV-store consistency score."
            },
            techStack: ["C++20", "gRPC", "D3.js", "Distributed Systems"],
            link: "https://github.com/Adithya2441/RAFT"
        },
        {
            title: "Operating System Development",
            description: "A functional OS kernel written from scratch. (Private repository as per course requirements)",
            caseStudy: {
                problem: "Understanding the low-level complexities of memory management and process scheduling in modern operating systems.",
                solution: "Built a 32-bit kernel from scratch supporting multi-tasking, paging, and interrupt handling.",
                impact: "Implemented process scheduling, memory management, and system calls with fault-tolerant performance on bare metal x86 hardware."
            },
            techStack: ["C", "x86 Assembly", "QEMU", "Grub"],
            link: "https://github.com/Adithya2441/Weenix_Operating_System"
        },
        {
            title: "AI-Based Image Generation Platform",
            description: "Generative art platform utilizing Stable Diffusion.",
            caseStudy: {
                problem: "Creating high-fidelity images from text descriptions requires complex model pipelines often inaccessible to general users.",
                solution: "Reproduced Stable Diffusion on 80K images, matching original-model coherence (CLIP score 34.9–36.2) with 81% artist-imitation accuracy.",
                impact: "Fine-tuned the pipeline for 25% better text-to-image quality and served it through a web interface generating styled artwork in under 10 seconds."
            },
            techStack: ["Python", "PyTorch", "Stable Diffusion", "CLIP", "React"],
            link: "https://github.com/Adithya2441/text-to-image"
        },
        {
            title: "BiLSTM-CRF Named Entity Recognition",
            description: "Deep learning models for Named Entity Recognition (NER), spanning BiLSTM baselines to GloVe embeddings, CNN character representations, and CRF sequence decoding.",
            caseStudy: {
                problem: "Sequential NLP tasks require joint modeling of word semantics, casing patterns, and label transition constraints for high tagging accuracy.",
                solution: "Engineered custom PyTorch architectures combining BiLSTMs, GloVe embeddings, CNN character encoders, and CRF output layers with Viterbi decoding.",
                impact: "Achieved 91.05% F1 on the CoNLL-2003 benchmark with multi-stage hyperparameter optimization."
            },
            techStack: ["PyTorch", "NLP", "BiLSTM", "GloVe", "CRF"],
            link: "https://github.com/Adithya2441/NLP"
        },
        {
            title: "Restaurant Reservation System",
            description: "Full-stack booking management platform.",
            caseStudy: {
                problem: "Restaurants struggle with real-time table management and double bookings during peak hours.",
                solution: "Developed a centralized reservation system with visual table layouts and conflict detection algorithms.",
                impact: "Simulated load testing showed capability to handle 500+ concurrent bookings without latency."
            },
            techStack: ["Django", "React", "PostgreSQL", "Docker", "Redis"],
            link: "https://github.com/Adithya2441/Restaurant-Reservation-System"
        },
        {
            title: "Waste Image Classification",
            description: "Automated recycling sorting using Computer Vision.",
            caseStudy: {
                problem: "Manual waste sorting is inefficient and error-prone, leading to lower recycling rates.",
                solution: "Implemented a Transfer Learning model (ResNet50) to classify waste into 6 distinct categories.",
                impact: "Achieved 92% classification accuracy on the test set, suitable for deployment in smart bins."
            },
            techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
            link: "https://github.com/Adithya2441/Multiclass-image-classification"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website built with React and Vite.",
            caseStudy: {
                problem: "Need a centralized platform to showcase software engineering skills, projects, and experience.",
                solution: "Designed and developed a responsive, modern portfolio using React, Vite, and custom CSS.",
                impact: "Provides a professional online presence and easy access to resume and project repositories."
            },
            techStack: ["React", "Vite", "CSS", "GitHub Actions"],
            link: "https://github.com/Adithya2441/Portfolio"
        }
    ],
    skills: {
        languages: ["Python", "C++", "Java", "C", "SQL", "JavaScript", "R", "HTML/CSS"],
        mlAi: ["PyTorch", "TensorFlow/Keras", "Hugging Face", "Scikit-learn", "NumPy", "Pandas", "OpenCV", "FAISS", "X-CLIP", "Whisper", "Computer Vision", "NLP"],
        genAiAgents: ["LLMs", "RAG", "LangGraph", "LangChain", "Model Context Protocol (MCP)", "Gemini API", "GPT-4o", "Prompt Engineering"],
        mlInference: ["ONNX", "TensorRT", "CUDA", "TorchServe", "TF Serving", "SageMaker (Batch Transform, Async, Serverless)"],
        cloudBackend: ["AWS (SageMaker, S3, EC2, EKS, Lambda, Bedrock)", "Google Cloud Run", "Docker", "Kubernetes", "FastAPI", "Django", "Celery"],
        databases: ["PostgreSQL", "MongoDB", "DynamoDB", "MySQL", "Firebase"],
        devOps: ["Git", "CI/CD", "GitHub Actions", "Jenkins", "Linux", "Jira", "Postman", "pytest", "JUnit", "Claude Code"]
    }
};
