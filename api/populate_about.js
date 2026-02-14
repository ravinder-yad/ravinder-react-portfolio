
const myHeaders = {
    "Content-Type": "application/json"
};

const raw = JSON.stringify({
    "sections": [
        {
            "title": "skills",
            "heading": "Skills & Technologies",
            "subheading": "Technologies and tools I use to build modern, scalable, and reliable web applications.",
            "info": [
                {
                    "title": "Frontend Development",
                    "desc": "I create clean, responsive, and interactive user interfaces with strong focus on UX.",
                    "icons": [
                        {
                            "name": "HTML5",
                            "icon": "FaHtml5"
                        },
                        {
                            "name": "CSS3",
                            "icon": "FaCss3"
                        },
                        {
                            "name": "Bootstrap",
                            "icon": "FaBootstrap"
                        },
                        {
                            "name": "JavaScript",
                            "icon": "FaJs"
                        },
                        {
                            "name": "React.js",
                            "icon": "FaReact"
                        }
                    ]
                },
                {
                    "title": "Backend Development",
                    "desc": "I build secure and scalable backend systems.",
                    "icons": [
                        {
                            "name": "Node.js",
                            "icon": "FaNodeJs"
                        },
                        {
                            "name": "Express.js",
                            "icon": "SiExpress"
                        },
                        {
                            "name": "MongoDB",
                            "icon": "SiMongodb"
                        }
                    ]
                }
            ]
        },
        {
            "title": "experience",
            "heading": "Experience & Learning Journey",
            "info": [
                {
                    "title": "Frontend Developer",
                    "stage": "2024 – Present",
                    "desc": "Building real-world projects using React and modern UI practices.",
                    "icons": []
                },
                {
                    "title": "Web Developer",
                    "stage": "2025 – Present",
                    "desc": "Working on responsive and scalable web projects.",
                    "icons": []
                }
            ]
        },
        {
            "title": "credentials",
            "heading": "Education & Training",
            "info": [
                {
                    "title": "Bachelor of Computer Applications (BCA)",
                    "stage": "2024 – 2027",
                    "desc": "Focused on CS fundamentals and application development.",
                    "icons": []
                },
                {
                    "title": "Full Stack Development Training",
                    "stage": "2026",
                    "desc": "Hands-on MERN stack training.",
                    "icons": []
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

fetch("http://localhost:5000/api/about", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
