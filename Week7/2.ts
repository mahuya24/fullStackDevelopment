import express from "express";
import type { Request, Response } from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/student", (req: Request, res: Response) => {

    const name = req.query.name as string;

    if (!name) {
        return res.send("Validation Failed: Name is Required");
    }

    res.render("student", {
        name: name
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});