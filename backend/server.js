import express from "express";
import cors from "cors";
import fs from "fs";
import userRoutes from "./routes/userRoutes.js";
import offerRoutes from "./routes/offerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/offers", offerRoutes);



app.get("/", (req, res) => {
    res.json({ message: "PerkFlow backend is running" });
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});