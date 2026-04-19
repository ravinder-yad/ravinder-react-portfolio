
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiTailwindcss } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { HiFire, HiComputerDesktop, HiServer, HiCodeBracketSquare, HiDevicePhoneMobile, HiBriefcase } from 'react-icons/hi2';

export const homeData = {
    hero: {
        greeting: "Hi, I’m",
        name: "Ravinder Kumar",
        subtitlePrefix: "I’m a",
        roles: [
            "Full Stack Web Developer",
            "MERN Stack Developer",
            "React.js Specialist",
            "Creative Problem Solver"
        ],
        description: "Passionate Full Stack Developer (MERN Stack) with hands-on experience in building scalable Web Applications using React.js, Node.js, Express.js, and MongoDB. Skilled in frontend and backend development with a focus on performance, clean code, and user-friendly design."
    },
    buttons: {
        primary: {
            text: "View My Projects",
            route: "/projects"
        },
        secondary: {
            text: "Get in Touch",
            route: "/contact"
        }
    },
    image: {
        src: "/avatar_final.png",
        alt: "Ravinder Kumar – Full Stack Web Developer"
    }
};

export const aboutData = [
    {
        title: "skills",
        heading: "Skills & Technologies",
        subheading: "Technologies and tools I use to build modern, scalable, and reliable web applications.",
        info: [
            {
                title: "Frontend Development",
                desc: "I create clean, responsive, and interactive user interfaces with strong focus on UX.",
                icons: [
                    { name: "HTML5", icon: "FaHtml5", Icon: FaHtml5 },
                    { name: "CSS3", icon: "FaCss3", Icon: FaCss3 },
                    { name: "Bootstrap", icon: "FaBootstrap", Icon: FaBootstrap },
                    { name: "JavaScript", icon: "FaJs", Icon: FaJs },
                    { name: "React.js", icon: "FaReact", Icon: FaReact }
                ]
            },
            {
                title: "Backend & Database",
                desc: "I build secure, scalable backend systems and manage efficient databases.",
                icons: [
                    { name: "Node.js", icon: "FaNodeJs", Icon: FaNodeJs },
                    { name: "Express.js", icon: "SiExpress", Icon: SiExpress },
                    { name: "MongoDB", icon: "SiMongodb", Icon: SiMongodb },
                    { name: "REST APIs", icon: "HiFire", Icon: HiFire }
                ]
            }
        ]
    },
    {
        title: "experience",
        heading: "Experience & Learning Journey",
        info: [
            {
                title: "Frontend Developer",
                stage: "2024 – Present",
                desc: "Building real-world projects using React and modern UI practices.",
                icons: []
            },
            {
                title: "Web Developer",
                stage: "2025 – Present",
                desc: "Working on responsive and scalable web projects.",
                icons: []
            }
        ]
    },
    {
        title: "credentials",
        heading: "Education & Training",
        info: [
            {
                title: "Bachelor of Computer Applications (BCA)",
                stage: "2024 – 2027",
                desc: "Focused on CS fundamentals and application development.",
                icons: []
            },
            {
                title: "Full Stack Development Training",
                stage: "2026",
                desc: "Hands-on MERN stack training.",
                icons: []
            }
        ]
    }
];

export const projectsData = [
    {
        title: "Mokshika Water Purifier",
        description: "Business website highlighting services, products, and contact details.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://mokshika-water-purify-d946.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/water/800/600",
        category: "Business"
    },
    {
        title: "Rapido App (UI Clone)",
        description: "Frontend UI clone focusing on layout, styling, and responsiveness.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://rapido-app-ten.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/rapido/800/600",
        category: "Logistics"
    },
    {
        title: "Electricity Billing Website",
        description: "Simple billing interface with clean design and usability.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://electricity-phi.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/electricity/800/600",
        category: "Services"
    },
    {
        title: "My Music",
        description: "Built a music web application with an interactive UI and responsive design.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://my-music-kohl.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/music/800/600",
        category: "Entertainment"
    },
    {
        title: "CineCharge",
        description: "Movie-related web application with modern layout and component-based UI.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://cinecharge.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/movies/800/600",
        category: "Entertainment"
    },
    {
        title: "TIPS-G Alwar",
        description: "Educational institute website with full-stack backend integration and RESTful APIs for dynamic content management.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://tips-g-alwar.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/education/800/600",
        category: "Education"
    },
    {
        title: "RK Gym",
        description: "A comprehensive fitness and gym management platform featuring a modern UI, workout tracking, and responsive design.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        link: "https://rk-gym-one.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/gym/800/600",
        category: "Fitness"
    }
];

export const resumeData = {
    profile: {
        name: "Ravinder Kumar",
        email: "ravinderyadav092007@gmail.com",
        phone: "+91 89494 77114",
        title: "Full Stack Developer",
        about: "Passionate Full Stack Developer (MERN Stack) with hands-on experience in Full Stack Development and building scalable Web Applications using React.js, Node.js, Express.js, and MongoDB. Skilled in frontend and backend development with a focus on performance, clean code, and user-friendly design.",
        location: "Mundawar, Alwar (Raj.)",
        resumeFile: "/Full stack developer resume.pdf",
        socials: [
            { name: "GitHub", link: "https://github.com/ravinder-yad" },
            { name: "Portfolio", link: "#" },
            { name: "LinkedIn", link: "#" }
        ]
    },
    experience: [
        {
            title: "Full Stack & Frontend Web Development Projects",
            company: "MERN Stack Specialist",
            date: "2024 – Present",
            points: [
                "Developed multiple responsive web applications using React.js, Node.js, and MongoDB",
                "Built Tips-G Alwar Business Website with full-stack backend integration and RESTful APIs",
                "Designed Mokshika Water Purifier Website with modern UI and responsive product showcase",
                "Created CineCharge Movie Booking Website with dynamic content handling and API integration",
                "Developed Foodorax Food Ordering Platform and E-Commerce Web Application with product listing, cart functionality, and user authentication",
                "Built frontend projects such as Rapido App Clone and YouTube Clone using HTML, CSS, Bootstrap, and JavaScript",
                "Focused on reusable components, clean UI, and mobile-friendly responsive design across all projects"
            ]
        }
    ],
    education: [
        {
            institution: "Manipal University Jaipur",
            date: "2024 – 2027",
            title: "Bachelor of Computer Applications (BCA)",
            desc: "Focused on programming fundamentals, Full Stack Development, and building scalable applications."
        }
    ],
    skills: {
        frontend: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript (ES6+)", "React.js"],
        backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "API Integration"],
        database: ["MongoDB", "SQL (Basic)"],
        tools: ["Git & GitHub", "Postman", "VS Code", "Notion"]
    },
    certifications: [
        "Git & GitHub Fundamentals – CodeChef",
        "500+ Problem Difficulty Rating Achievement – CodeChef"
    ],
    others: {
        strengths: ["Quick Learner", "Problem Solving", "Time Management", "Team Collaboration"],
        languages: ["Hindi (Native)", "English (Intermediate)"]
    }
};

export const servicesData = [
    {
        icon: HiComputerDesktop,
        title: "Frontend Development",
        description: "I build modern, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and React with a strong focus on UX."
    },
    {
        icon: HiServer,
        title: "Backend Development",
        description: "I develop secure and scalable backend systems using Node.js, Express, and MongoDB, creating reliable APIs."
    },
    {
        icon: HiCodeBracketSquare,
        title: "Full Stack Web Development",
        description: "I build complete web applications by managing both frontend and backend development."
    },
    {
        icon: HiDevicePhoneMobile,
        title: "Responsive Web Design",
        description: "I design and optimize websites to work seamlessly across mobile, tablet, and desktop devices."
    }
];

export const skillsData = [
    {
        title: "Frontend Development",
        desc: "I build clean, responsive, and interactive user interfaces with a strong focus on usability, performance, and UX.",
        skills: [
            { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
            { name: "CSS3", Icon: FaCss3, color: "#1572b6" },
            { name: "Bootstrap", Icon: FaBootstrap, color: "#7952b3" },
            { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
            { name: "JavaScript (ES6+)", Icon: FaJs, color: "#f7df1e" },
            { name: "React.js", Icon: FaReact, color: "#61dafb" }
        ]
    },
    {
        title: "Backend Development",
        desc: "I develop secure and scalable backend systems that efficiently handle data, APIs, and server-side logic.",
        skills: [
            { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
            { name: "RESTful APIs", Icon: HiFire, color: "#f13024" },
            { name: "JWT Auth", Icon: HiFire, color: "#f13024" }
        ]
    },
    {
        title: "Database Development",
        desc: "I manage and optimize databases for high-performance and data integrity.",
        skills: [
            { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
            { name: "SQL (Basic)", Icon: HiServer, color: "#1572b6" }
        ]
    },
    {
        title: "Tools & Technologies",
        desc: "I work with modern development tools to improve productivity and maintain clean codebases.",
        skills: [
            { name: "Git & GitHub", Icon: FaGithub, color: "#ffffff" },
            { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
            { name: "VS Code", Icon: VscCode, color: "#007acc" },
            { name: "Notion", Icon: HiBriefcase, color: "#ffffff" }
        ]
    }
];

export const certificatesData = [
    {
        title: "500 Difficulty Rating - Practice Problems",
        issuer: "CodeChef",
        date: "Jan 2026",
        credential: "ad2a2c0",
        image: "/cert-500.jpg"
    },
    {
        title: "Git/Github - Lessons and Projects",
        issuer: "CodeChef",
        date: "Jan 2026",
        credential: "fd2c1f6",
        image: "/cert-git.jpg"
    }
];
