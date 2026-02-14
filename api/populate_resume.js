
const myHeaders = {
    "Content-Type": "application/json"
};

const raw = JSON.stringify({
    "profile": {
        "name": "Ravinder Kumar",
        "email": "ravinderyadav092007@gmail.com",
        "phone": "+91 8949477114",
        "title": "Full Stack Web Developer",
        "about": "I am a motivated Full Stack Web Developer with a strong foundation in modern web technologies...",
        "location": "Mundawar, Alwar, Rajasthan",
        "resumeFile": "/resume.png",
        "socials": []
    },
    "experience": [
        {
            "title": "Frontend & Full Stack Development (Practice)",
            "company": "Self-Directed Projects",
            "date": "2024 – Present",
            "points": [
                "Designed responsive interfaces using HTML, CSS, Bootstrap, Tailwind",
                "Built reusable React components",
                "Focused on clean UI and performance"
            ]
        },
        {
            "title": "Backend Development (Practice)",
            "company": "Self-Directed Projects",
            "date": "2025 – Present",
            "points": [
                "Developed APIs using Node.js and Express",
                "Integrated MongoDB for CRUD operations",
                "Tested APIs using Postman"
            ]
        }
    ],
    "education": [
        {
            "institution": "Manipal University Jaipur",
            "date": "2024 – 2026",
            "title": "Bachelor of Computer Applications (BCA)",
            "desc": "Focused on programming fundamentals and full stack development"
        }
    ],
    "skills": [
        {
            "frontend": [
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Tailwind CSS",
                "JavaScript",
                "React.js"
            ],
            "backend": [
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs"
            ],
            "tools": [
                "Git & GitHub",
                "Postman",
                "VS Code",
                "npm",
                "Canva"
            ]
        }
    ],
    "certifications": [
        "Git & GitHub Fundamentals – CodeChef",
        "500+ Problem Difficulty Rating Achievement – CodeChef"
    ],
    "others": {
        "strengths": [
            "Quick Learner",
            "Problem Solving",
            "Time Management",
            "Team Collaboration"
        ],
        "languages": [
            "Hindi (Native)",
            "English (Intermediate)"
        ]
    }
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("http://localhost:5000/api/resume", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
