export const resumeData = {
    profile: {
        name: "Adithya Sudhindra",
        role: "Software Engineer | AI/ML Specialist",
        summary: "Software Engineer with expertise in Generative AI, Full-Stack Development, and Cloud-Native Distributed Systems. Proven track record of optimizing ML pipelines at Mercedes-Benz and building scalable architectures. Passionate about solving complex problems through AI innovation and robust engineering. Based in Los Angeles, CA.",
        email: "asudhind@usc.edu",
        location: "Los Angeles, CA",
        socials: {
            github: "https://github.com/Adithya2441",
            linkedin: "https://www.linkedin.com/in/adithya-sudhindra/",
        }
    },
    experience: [
        {
            company: "Northern Lights (Presaige)",
            role: "Machine Learning Engineer Intern",
            period: "Jan 2025 – Present",
            location: "Los Angeles, CA",
            description: "Developing agentic AI systems and scalable ML pipelines for large-scale social media and image datasets.",
            achievements: [
                "Building an **agentic AI framework** using **Model Context Protocol (MCP)** and **AWS services** for autonomous, general-purpose task execution — applied across multiple use cases including YouTube Shorts data workflows.",
                "Trained and validated image/video popularity-prediction models on Google's Unsplash dataset (**125GB+**, **6.15M images**) using **ResNet embeddings** and **AWS SageMaker**, processed and stored via **AWS S3**.",
                "Built a large-scale statistical validation pipeline (**FAISS + ResNet/X-CLIP embeddings**) to test model score reliability against real engagement, producing **250K+ pairwise comparisons** across a **1.25M-image** and **2M+ Reels** dataset.",
                "Extended popularity-prediction infrastructure to TikTok — built a multi-stage data pipeline collecting content via **Apify's TikTok scraper**, and currently developing a TikTok popularity-prediction model on top of the collected dataset.",
                "Shipped a production generative AI feature (**Google Gemini**) that auto-generates optimized video thumbnails, integrated end-to-end into the platform via **Django** and **Celery**.",
                "Deployed and optimized **AWS SageMaker** inference infrastructure (real-time, async, and serverless endpoints), including autoscaling fixes that reduced unnecessary GPU spend."
            ],
            techStack: ["AWS S3", "AWS SageMaker", "Python", "MCP", "FAISS", "Gemini API", "Django", "Celery", "Apify"]
        },
        {
            company: "Mercedes-Benz Research and Development",
            role: "Software Developer Consultant",
            period: "Jul 2023 – Dec 2024",
            location: "Bangalore, India",
            description: "Contributed to a mission-critical Java enterprise application serving thousands of global users, focusing on AI integration and system modernization.",
            achievements: [
                "Architected an automated help desk system using **GPT-4o** and **RAG**, reducing support query resolution time by **40%** and increasing documentation engagement by **30%**.",
                "Engineered **15+ full-stack features** for a high-traffic dashboard using **Java EE** and **Spring Boot**, consistently delivering **20–30%** ahead of Agile sprint schedules.",
                "Refactored a legacy 17-year-old codebase, extracting core business logic into microservices and implementing **CI/CD pipelines** with **Jenkins** and **JUnit**, ensuring 100% production stability.",
                "Optimized **PostgreSQL** definitions and API response times, reducing latency by **15%** for critical user-facing endpoints.",
                "Collaborated with cross-functional teams to containerize applications using **Docker**, facilitating seamless deployment across diverse environments."
            ],
            techStack: ["Java", "Spring Boot", "GPT-4o", "RAG", "Docker", "Jenkins", "PostgreSQL"]
        },
        {
            company: "Saigeware Technologies",
            role: "AI and Data Science Intern",
            period: "Feb 2023 – Apr 2023",
            location: "Bangalore, India",
            description: "Led the development of multimodal machine learning pipelines for healthcare diagnostics.",
            achievements: [
                "Developed a custom ensemble model combining **Random Forest** and **CNNs** for multimodal healthcare data, improving diagnostic accuracy from **55% to 75%**.",
                "Built robust **ETL pipelines** to ingest and process a **1.2 billion+** record US healthcare dataset, automating reporting workflows and reducing manual data handling by **30%**.",
                "Implement **VAE (Variational Autoencoder)** models to extract latent features from clinical imagery, enhancing risk factor identification for early intervention.",
                "Designed and verified predictive analytics dashboards for stroke risk assessment, directly supporting clinical decision-making processes."
            ],
            techStack: ["Python", "PyTorch", "TensorFlow", "Pandas", "Computer Vision", "ETL"]
        },
        {
            company: "BETSOL",
            role: "Software Engineer Trainee",
            period: "Jun 2022 – Jul 2022",
            location: "Bangalore, India",
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
            gpa: "3.77/4.0",
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
            title: "Operating System Development",
            description: "A functional OS kernel written from scratch. (Private repository as per course requirements)",
            caseStudy: {
                problem: "Understanding the low-level complexities of memory management and process scheduling in modern operating systems.",
                solution: "Built a 32-bit kernel from scratch supporting multi-tasking, paging, and interruptions.",
                impact: "Successfully booted on bare metal x86 hardware and handled basic shell commands."
            },
            techStack: ["C", "x86 Assembly", "QEMU", "Grub"],
            link: "https://github.com/Adithya2441/Weenix_Operating_System"
        },
        {
            title: "AI-Based Image Generation Platform",
            description: "Generative art platform utilizing Stable Diffusion.",
            caseStudy: {
                problem: "Creating high-fidelity images from text descriptions requires complex model pipelines often inaccessible to general users.",
                solution: "Integrated Stable Diffusion and CLIP models into a user-friendly web interface for real-time generation.",
                impact: "Enabled users to generate artwork in <10s with custom style transfer capabilities."
            },
            techStack: ["Python", "PyTorch", "Stable Diffusion", "React", "FastAPI"],
            link: "https://github.com/Adithya2441/text-to-image"
        },
        {
            title: "BiLSTM-CRF Named Entity Recognition",
            description: "Deep learning models for Named Entity Recognition (NER), spanning BiLSTM baselines to GloVe embeddings, CNN character representations, and CRF sequence decoding.",
            caseStudy: {
                problem: "Sequential NLP tasks require joint modeling of word semantics, casing patterns, and label transition constraints for high tagging accuracy.",
                solution: "Engineered custom PyTorch architectures combining BiLSTMs, GloVe embeddings, CNN character encoders, and CRF output layers.",
                impact: "Achieved optimal sequence labeling F1-scores on the CoNLL-03 benchmark with multi-stage hyperparameter optimization."
            },
            techStack: ["PyTorch", "NLP", "BiLSTM", "GloVe", "CRF"],
            link: "https://github.com/Adithya2441/NLP"
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
        languages: ["Python", "Java", "C/C++", "JavaScript/TypeScript", "SQL", "x86 Assembly", "HTML/CSS"],
        frameworks: ["PyTorch", "TensorFlow", "Django", "Celery", "React", "Spring Boot", "FastAPI", "Node.js", "Next.js", "gRPC", "D3.js"],
        tools: ["AWS (SageMaker, S3)", "FAISS", "Gemini API", "Apify", "Docker", "Kubernetes", "Git/GitHub", "GitHub Actions", "PostgreSQL", "MongoDB", "Jenkins", "QEMU"],
        concepts: ["Generative AI", "Agentic AI", "Model Context Protocol (MCP)", "Distributed Systems (Raft)", "Computer Vision & Surgical AI", "Popularity Prediction", "Contrastive Learning", "RAG", "Microservices", "CI/CD"]
    }
};
