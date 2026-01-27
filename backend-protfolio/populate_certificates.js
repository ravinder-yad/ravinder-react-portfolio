
// Node 24 has native fetch

const myHeaders = {
    "Content-Type": "application/json"
};

const raw = JSON.stringify({
    "certificates": [
        {
            "title": "Git/Github - Lessons and Projects",
            "issuer": "CodeChef",
            "date": "Jan 2026",
            "credential": "fd2c1f6",
            "image": "/cert-git.jpg"
        },
        {
            "title": "500 Difficulty Rating - Practice Problems",
            "issuer": "CodeChef",
            "date": "Jan 2026",
            "credential": "ad2a2c0",
            "image": "/cert-500.jpg"
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("http://localhost:5000/api/certificates", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
