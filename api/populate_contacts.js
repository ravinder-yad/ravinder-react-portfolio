
// Helper function to send a single contact
const sendContact = async (contact) => {
    try {
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });
        const result = await response.json();
        console.log(`Sent contact from ${contact.yourname}:`, result.message);
    } catch (error) {
        console.error(`Error sending contact from ${contact.yourname}:`, error);
    }
};

const contacts = [
    {
        "yourname": "mm",
        "email": "ravinderyadav092007@gmail.com",
        "Connectwith": "ravinderyadav092007@gmail.com"
    },
    {
        "yourname": "Ravinder Kumar",
        "email": "ravinder@gmail.com",
        "Connectwith": "I want to discuss a project with you."
    },
    {
        "yourname": "Mundawar, Alwar, Rajasthan",
        "email": "ravinderyadav092007@gmail.com",
        "Connectwith": "+91 8949477114\n\n"
    },
    {
        "yourname": "Tips",
        "email": "tips@gmail.com",
        "Connectwith": "I want to connect with you"
    },
    {
        "yourname": "Tips",
        "email": "tips@gmail.com",
        "Connectwith": "I want to connect with you"
    },
    {
        "yourname": "ravinder",
        "email": "ravinderyadav092007@gmail.com",
        "Connectwith": "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
    },
    {
        "yourname": "Tips",
        "email": "tips@gmail.com",
        "Connectwith": "I want to connect with you"
    }
];

// Helper to run sequentially to avoid overwhelming server or just for clarity
const populate = async () => {
    for (const contact of contacts) {
        await sendContact(contact);
    }
    console.log("All contacts processed.");
};

populate();
