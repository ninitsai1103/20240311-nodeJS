import express from "express";
import {resolve} from "path";
import jsonData from "./singers.json" assert {type: "json"};
const { singers } = jsonData;
console.log(singers);

const app = express();

app.get("/", (req, res) => {
    res.send("網頁首頁");
})

//在這個範例中，將會透過 http://localhost:3000/signer/3.html 這樣的方式去對應 JSON id 為 3 的資料，把資料中的名字與圖片取出來顯示在頁面中

app.get("/singers/:id.html", (req, res) => {
    const { id } = req.params;

    let result = singers.find(singer => parseInt(id) === singer.id)

    if (result) {
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
    } else {
        // http方法
        // res.statusCode = 404;

        // express方法
        // res.status(404);
        // res.set("Ni", "Server");
        // res.send("<h1>找不到頁面</h1>")

        // 集中寫一行
        res.status(404).set("Ben", "Server").send("<h1>找不到頁面</h1>")
    }
});

// api json 用法 api.singer/:id -> api.singer/4
app.get('/api.singer/:id',(req,res)=>{
    const {id} = req.params;

    let result = singers.find(singer => singer.id === parseInt(id)); //以上簡寫
    // res.json(result)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).json({error:"查無資料"});
    }
});

app.get("/netflix", (req, res) => {
    res.redirect("http://www.netflix.com/tw/");
});

app.get("/download", (req, res) => {
    res.download(resolve(import.meta.dirname, "singers.json"));
});

app.get("/content", (req, res) => {
    res.sendFile(resolve("test.html"));
});

app.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})