const express = require("express");
const app = express();
const PORT = 3001;

// ルーティングができる
const userRouter = require("./routes/user");

//HTMLでレンダリングできるようにする publicフォルダの中のファイルを読み込む
app.use(express.static("public"));


//ルートパス
app.get("/", (req, res) => {
    console.log("ルートパスです");

    res.send("<h1>Hello</h1>");
})

// userルーティング
app.use('/user', userRouter);


// Webサーバー
app.listen(PORT, () => {
    console.log("サーバー起動");
})