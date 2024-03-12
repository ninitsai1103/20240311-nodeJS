import express from "express";
import jsonData from "./singers.json" assert {type: "json"};
const { singers } = jsonData;
console.log(singers);

const app = express();

app.get("/", (req, res) => {
    res.send("網頁首頁");
})

// http://localhost:3000/singers/3.html

app.get("/singers/:id.html", (req, res) => {
    const { id } = req.params;

    // let result = singers.find((singer) => {
        // if (singer.id === id){
        //     return true;
        // }
        // 改為
    //     return singer.id == id
    // })

    let result = singers.find(singer => parseInt(id) === singer.id)
    // res.send(`id = ${res.params.id}`);
    // res.json(result)
    if (result){
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${result.singer_name} Page</title>
        </head>
        <body>
            <h1>${result.singer_name}</h1>
            <img src="${result.singer_img}" alt="">
        </body>
        </html>`);
    }else {
        res.send("<h1>找不到頁面</h1>")
    }
})

app.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})