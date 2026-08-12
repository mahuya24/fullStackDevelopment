import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

// Display Form
app.get("/", (req, res) => {
    res.render("form");
});

// Handle Form Submission
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.send("Validation Failed: Name and Email are required");
    }

    res.send(`Welcome ${name}! Your email is ${email}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});