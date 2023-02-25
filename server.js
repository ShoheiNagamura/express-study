const express = require("express");
const app = express();
const PORT = 3001;

// ルーティングができる
const userRouter = require("./routes/user");

//HTMLでレンダリングできるようにする publicフォルダの中のファイルを読み込む
// app.use(express.static("public"));

//ejsテンプレートエンジンを読み込ませて動的なファイルを生成
app.set('view engine', 'ejs');


//ルートパス
app.get("/", (req, res) => {
    // console.log("ルートパスです");

    // res.send("<h1>Hello</h1>");

    res.render('index', { Text: "動的ファイルを生成" })
})

// userルーティング
app.use('/user', userRouter);


// Webサーバー
app.listen(PORT, () => {
    console.log("サーバー起動");
})