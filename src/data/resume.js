export const resumeData = {
    profile: {
        name: "Adithya Sudhindra",
        role: "Software Engineer | AI/ML Specialist",
        summary: "Software Engineer with expertise in Generative AI, Full-Stack Development, and Cloud-Native Distributed Systems. Proven track record of optimizing ML pipelines at Mercedes-Benz and building scalable architectures. Passionate about solving complex problems through AI innovation and robust engineering.",
        email: "adithyasudhindra@gmail.com",
        location: "Los Angeles, CA",
        socials: {
            github: "https://github.com/Adithya2441",
            linkedin: "https://www.linkedin.com/in/adithya-sudhindra/", // Updated to specific placeholder as requested
        }
    },
    experience: [
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
            period: "2025 – 2026",
            gpa: "3.74/4.0",
            courses: ["Analysis of Algorithms", "Web Technologies", "Database Systems", "Applied NLP", "Foundations of AI"]
        },
        {
            institution: "JSS Academy of Technical Education",
            degree: "Bachelor of Engineering in Computer Science",
            period: "2019 – 2023",
            gpa: "9.24/10.0"
        }
    ],
    projects: [
        {
            title: "Operating System Development",
            description: "A functional OS kernel written from scratch.",
            caseStudy: {
                problem: "Understanding the low-level complexities of memory management and process scheduling in modern operating systems.",
                solution: "Built a 32-bit kernel from scratch supporting multi-tasking, paging, and interruptions.",
                impact: "Successfully booted on bare metal x86 hardware and handled basic shell commands."
            },
            techStack: ["C", "x86 Assembly", "QEMU", "Grub"],
            link: "https://github.com/Adithya2441" // Placeholder if specific repo not found
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
            link: "https://github.com/Adithya2441"
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
            link: "https://github.com/Adithya2441"
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
            link: "https://github.com/Adithya2441"
        }
    ],
    skills: {
        languages: ["Python", "Java", "C++", "JavaScript/TypeScript", "SQL", "HTML/CSS"],
        frameworks: ["React", "Django", "Spring Boot", "Node.js", "PyTorch", "TensorFlow", "Next.js"],
        tools: ["Docker", "Kubernetes", "AWS", "Git/GitHub", "PostgreSQL", "MongoDB", "Jenkins"],
        concepts: ["Generative AI", "RAG", "Microservices", "Distributed Systems", "Computer Vision", "CI/CD"]
    }
};
