import epress from "express";
import moment from "moment";
import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const app = epress();

app.get("/", (req, res) => {
    const {ip, path} = req;
    console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
    console.log(ip);
    console.log(path);
    const accessLog = ``;
    fs.appendFile(path.resolve(__dirname, "access.log"), accessLog);
    res.send("網頁首頁");

})

app.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})