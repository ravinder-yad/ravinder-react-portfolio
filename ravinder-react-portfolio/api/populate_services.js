
const myHeaders = {
    "Content-Type": "application/json"
};

const raw = JSON.stringify({
    "services": [
        {
            "icon": "HiComputerDesktop",
            "title": "Frontend Development",
            "description": "I build modern, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and React with a strong focus on UX."
        },
        {
            "icon": "HiServer",
            "title": "Backend Development",
            "description": "I develop secure and scalable backend systems using Node.js, Express, and MongoDB, creating reliable APIs."
        },
        {
            "icon": "HiCodeBracketSquare",
            "title": "Full Stack Web Development",
            "description": "I build complete web applications by managing both frontend and backend development."
        },
        {
            "icon": "HiDevicePhoneMobile",
            "title": "Responsive Web Design",
            "description": "I design and optimize websites to work seamlessly across mobile, tablet, and desktop devices."
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("http://localhost:5000/api/services", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
