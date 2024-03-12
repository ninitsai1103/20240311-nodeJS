import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8")
    res.end("網站的主頁");
})

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})