
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiTailwindcss } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { HiFire, HiComputerDesktop, HiServer, HiCodeBracketSquare, HiDevicePhoneMobile } from 'react-icons/hi2';

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
        description: "I transform complex ideas into clean, scalable, and user-friendly digital experiences using modern technologies. My focus is on building high-performance web applications using modern technologies, with strong attention to detail and a passion for continuous learning."
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
        src: "/avatar.png",
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
                title: "Backend Development",
                desc: "I build secure and scalable backend systems.",
                icons: [
                    { name: "Node.js", icon: "FaNodeJs", Icon: FaNodeJs },
                    { name: "Express.js", icon: "SiExpress", Icon: SiExpress },
                    { name: "MongoDB", icon: "SiMongodb", Icon: SiMongodb }
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
        description: "Developed a responsive educational institute website with clean UI and performance optimization.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://tips-g-alwar-frontend-n3wn.vercel.app/",
        github: "#",
        image: "https://picsum.photos/seed/education/800/600",
        category: "Education"
    }
];

export const resumeData = {
    profile: {
        name: "Ravinder Kumar",
        email: "ravinderyadav092007@gmail.com",
        phone: "+91 8949477114",
        title: "Full Stack Web Developer",
        about: "I am a motivated Full Stack Web Developer with a strong foundation in modern web technologies...",
        location: "Mundawar, Alwar, Rajasthan",
        resumeFile: "/resume.png",
        socials: []
    },
    experience: [
        {
            title: "Frontend & Full Stack Development (Practice)",
            company: "Self-Directed Projects",
            date: "2024 – Present",
            points: [
                "Designed responsive interfaces using HTML, CSS, Bootstrap, Tailwind",
                "Built reusable React components",
                "Focused on clean UI and performance"
            ]
        },
        {
            title: "Backend Development (Practice)",
            company: "Self-Directed Projects",
            date: "2025 – Present",
            points: [
                "Developed APIs using Node.js and Express",
                "Integrated MongoDB for CRUD operations",
                "Tested APIs using Postman"
            ]
        }
    ],
    education: [
        {
            institution: "Manipal University Jaipur",
            date: "2024 – 2026",
            title: "Bachelor of Computer Applications (BCA)",
            desc: "Focused on programming fundamentals and full stack development"
        }
    ],
    skills: {
        frontend: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js"],
        backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
        tools: ["Git & GitHub", "Postman", "VS Code", "npm", "Canva"]
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
            { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
            { name: "React.js", Icon: FaReact, color: "#61dafb" },
            { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" }
        ]
    },
    {
        title: "Backend Development",
        desc: "I develop secure and scalable backend systems that efficiently handle data, APIs, and server-side logic.",
        skills: [
            { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
            { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
            { name: "REST APIs", Icon: HiFire, color: "#f13024" }
        ]
    },
    {
        title: "Tools & Technologies",
        desc: "I work with modern development tools to improve productivity and maintain clean codebases.",
        skills: [
            { name: "Git & GitHub", Icon: FaGithub, color: "#ffffff" },
            { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
            { name: "VS Code", Icon: VscCode, color: "#007acc" },
            { name: "npm", Icon: FaNpm, color: "#cb3837" }
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
