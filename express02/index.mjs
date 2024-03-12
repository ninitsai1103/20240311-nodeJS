import express from "express";

const app = express();

// app.all("*", (req, res) => {
//     res.setHeader("content-type", "text/html; charset=utf-8");
//     res.end("歡迎光臨 Home")
// })
// 越模糊的路徑要放越下面

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("網站主頁")
})

app.get("/login", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("登入頁面")
})

app.post("/login", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("進入登入流程")
})

app.all("/test", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("進入test")
})

app.all("*", (req, res) => {
    // res.setHeader("content-type", "text/html; charset=utf-8");
    res.send("歡迎光臨 Home")
})

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})