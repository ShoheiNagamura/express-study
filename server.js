const express = require("express");
const app = express();
const PORT = 3001;
const userRouter = require("./routes/user");

//ルートパス
app.get("/", (req, res) => {
    console.log("ルートパスです");

    res.send("<h1>Hello</h1>");
    // res.sendStatus(200)
})

// ルーティング
app.use('/user', userRouter);


// Webサーバー
app.listen(PORT, () => {
    console.log("サーバー起動");
})