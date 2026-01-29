
const myHeaders = {
    "Content-Type": "application/json"
};

const raw = JSON.stringify({
    "projects": [
        {
            "title": "Mokshika Water Purifier",
            "description": "Business website highlighting services, products, and contact details.",
            "tech": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "link": "https://mokshika-water-purify-d946.vercel.app/",
            "github": "#",
            "image": "https://picsum.photos/seed/water/800/600",
            "category": "Business"
        },
        {
            "title": "Rapido App (UI Clone)",
            "description": "Frontend UI clone focusing on layout, styling, and responsiveness.",
            "tech": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "link": "https://rapido-app-ten.vercel.app/",
            "github": "#",
            "image": "https://picsum.photos/seed/rapido/800/600",
            "category": "Logistics"
        },
        {
            "title": "Electricity Billing Website",
            "description": "Simple billing interface with clean design and usability.",
            "tech": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "link": "https://electricity-phi.vercel.app/",
            "github": "#",
            "image": "https://picsum.photos/seed/electricity/800/600",
            "category": "Services"
        },
        {
            "title": "My Music",
            "description": "Built a music web application with an interactive UI and responsive design.",
            "tech": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "link": "https://my-music-kohl.vercel.app/",
            "github": "#",
            "image": "https://picsum.photos/seed/music/800/600",
            "category": "Entertainment"
        },
        {
            "title": "CineCharge",
            "description": "Movie-related web application with modern layout and component-based UI.",
            "tech": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "link": "https://cinecharge.vercel.app/",
            "github": "#",
            "image": "https://picsum.photos/seed/movies/800/600",
            "category": "Entertainment"
        },
        {
            "title": "TIPS-G Alwar",
            "description": "Developed a responsive educational institute website with clean UI and performance optimization.",
            "tech": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "link": "https://tips-g-alwar-frontend-n3wn.vercel.app/",
            "github": "#",
            "image": "https://picsum.photos/seed/education/800/600",
            "category": "Education"
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("http://localhost:5000/api/projects", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
