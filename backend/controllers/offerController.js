import fs from "fs";

export const getOffers = (req, res) => {
    const data = JSON.parse(
        fs.readFileSync("./db.json", "utf-8")
    );

    res.json(data.offers);
};