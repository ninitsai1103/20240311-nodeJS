import express from "express";

const fakeData = {
    "CvZP-PIguWG": "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》",
    "CvRz0e3Awmi": "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》"
}

const app = express();

app.get("/", (req, res) => {
    res.send("網頁首頁");
})

app.get("/p/:id", (req, res) => {
    const {id} = req.params;
    console.log(id);

    // let pageContent = "IG";
    // pageContent = fakeData[id];
    // 改為
    // pageContent = ()?true:false
    let pageContent = (id)?(fakeData[id])?fakeData[id]:"no data":"IG";

    // if (id === "CvZP-PIguWG") {
    //     pageContent = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》";
    // }else if (id === "CvRz0e3Awmi") {
    //     pageContent = "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》";
    // }

    res.send(pageContent);
});

app.get("/users/:userID?", (req, res) => {
    console.log(`使用者ID是 ${req.params.userID}`);
    if (req.params.userID){
        res.send(`使用者ID是 ${req.params.userID}`);
    }else {
        res.send("匿名訪客");
    }
})

app.get("/books/:cateID/:bookID", (req, res) => {
    console.log(`書本的分類是 ${req.params.cateID}, 書本ID是 ${req.params.bookID}`);
    res.send(`書本的分類是 ${req.params.cateID}, 書本ID是 ${req.params.bookID}`);
})

app.get("/user/:id([0-9]+)", (req,res) => {
    // 路徑user/後只有帶數字才符合
    // :id([a-z][0-9]+
    // a-z一個字母加上數字才符合
    res.send(`${req.params.id}`)
})

app.get("/files/*", (req, res) => {
    const filePath = req.params[0];
    res.send(`${filePath}`);
})

// http://localhost:3000/p/id
// https://www.instagram.com/p/CvZP-PIguWG/
// https://www.instagram.com/p/CvRz0e3Awmi/

app.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})