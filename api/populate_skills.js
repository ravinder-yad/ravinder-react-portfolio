
const myHeaders = {
    "Content-Type": "application/json"
};

const raw = JSON.stringify({
    "categories": [
        {
            "title": "Frontend Development",
            "desc": "I build clean, responsive, and interactive user interfaces with a strong focus on usability, performance, and UX.",
            "skills": [
                {
                    "name": "HTML5",
                    "icon": "FaHtml5",
                    "color": "#e34f26"
                },
                {
                    "name": "CSS3",
                    "icon": "FaCss3",
                    "color": "#1572b6"
                },
                {
                    "name": "Bootstrap",
                    "icon": "FaBootstrap",
                    "color": "#7952b3"
                },
                {
                    "name": "JavaScript",
                    "icon": "FaJs",
                    "color": "#f7df1e"
                },
                {
                    "name": "React.js",
                    "icon": "FaReact",
                    "color": "#61dafb"
                },
                {
                    "name": "Tailwind CSS",
                    "icon": "SiTailwindcss",
                    "color": "#06b6d4"
                }
            ]
        },
        {
            "title": "Backend Development",
            "desc": "I develop secure and scalable backend systems that efficiently handle data, APIs, and server-side logic.",
            "skills": [
                {
                    "name": "Node.js",
                    "icon": "FaNodeJs",
                    "color": "#339933"
                },
                {
                    "name": "Express.js",
                    "icon": "SiExpress",
                    "color": "#ffffff"
                },
                {
                    "name": "MongoDB",
                    "icon": "SiMongodb",
                    "color": "#47a248"
                },
                {
                    "name": "REST APIs",
                    "icon": "HiFire",
                    "color": "#f13024"
                }
            ]
        },
        {
            "title": "Tools & Technologies",
            "desc": "I work with modern development tools to improve productivity and maintain clean codebases.",
            "skills": [
                {
                    "name": "Git & GitHub",
                    "icon": "FaGithub",
                    "color": "#ffffff"
                },
                {
                    "name": "Postman",
                    "icon": "SiPostman",
                    "color": "#ff6c37"
                },
                {
                    "name": "VS Code",
                    "icon": "VscCode",
                    "color": "#007acc"
                },
                {
                    "name": "npm",
                    "icon": "FaNpm",
                    "color": "#cb3837"
                }
            ]
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("http://localhost:5000/api/skills", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
